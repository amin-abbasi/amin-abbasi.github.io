import { configs } from '@constants/configs';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

const DashboardContainer = styled.div`
  padding: 1rem;
  padding-bottom: 0.5rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StatCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorderColor};
  color: ${(props) => props.theme.color};
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: auto;
    min-height: 80px;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.accentColor};
    font-family: var(--font-mono);
    margin: 0;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 0.65rem;
    opacity: 0.7;
    margin: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const ChartWrapper = styled.div<{ $height?: string }>`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.cardBorderColor};
  padding: 0.75rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  height: ${props => props.$height || '300px'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 0.8rem;
    font-family: var(--font-mono);
    margin-bottom: 0.5rem;
    text-align: center;
    color: ${(props) => props.theme.accentColor};
  }
`;

const BLUEPRINT_COLORS = [
  '#00d1ff', // Vibrant Cyan
  '#2ba878ff', // Green
  '#bd00ff', // Cyber Purple
  '#ff0055', // Neon Pink
  '#ff9900', // Warning Orange
  '#3366ff'  // Deep Sea Blue
];

interface PageView {
  id: string;
  created_at: string;
  path: string;
  country: string;
  visitor_id: string;
  referrer: string;
  browser?: string;
  os?: string;
}

export default function Dashboard() {
  const { t } = useTranslation(['layout']);
  const [data, setData] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const projectId = configs.firebaseProjectId;
        if (!projectId) return;

        const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/page_views?pageSize=1000`);
        
        if (response.status === 403) {
            setError("PERMISSION_DENIED: Go to Firebase Console -> Firestore -> Rules and use: match /page_views/{doc=**} { allow read, create: if true; }");
            setLoading(false);
            return;
        }

        const result = await response.json();

        if (result.documents) {
          const views = result.documents.map((doc: any) => {
            const fields = doc.fields;
            return {
              id: doc.name.split('/').pop(),
              path: fields.path?.stringValue || '/',
              visitor_id: fields.visitor_id?.stringValue || 'Legacy',
              referrer: fields.referrer?.stringValue || 'Direct',
              created_at: fields.created_at?.stringValue || '',
              country: fields.country?.stringValue || 'Unknown',
              browser: fields.browser?.stringValue || 'Unknown',
              os: fields.os?.stringValue || 'Unknown',
            };
          }) as PageView[];

          views.sort((a, b) => b.created_at.localeCompare(a.created_at));
          setData(views);
        } else if (result.error) {
            setError(`${result.error.status}: ${result.error.message}`);
        }
      } catch (err: any) {
        console.error('Error fetching analytics:', err);
        setError(err.message || "Failed to fetch data.");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <DashboardContainer>
        <h3 className="text-center mt-5" style={{ color: 'var(--blueprint-cyan-primary)', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>INITIALIZING_ENGINE...</h3>
      </DashboardContainer>
    );
  }

  // --- Aggregations ---
  const totalViews = data.length;
  const uniqueVisitors = new Set(data.map((v) => v.visitor_id)).size;
  const totalCountries = new Set(data.map((v) => v.country)).size;

  const last14Days = [...Array(14)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toISOString().split('T')[0];
  }).reverse();

  const dailyTraffic = last14Days.map(day => {
    const dayViews = data.filter(v => v.created_at.startsWith(day));
    return {
      name: day.split('-').slice(2).join(''), // DD
      views: dayViews.length,
      uniques: new Set(dayViews.map(v => v.visitor_id)).size
    };
  });

  const viewsByPage = data.reduce((acc, curr) => {
    acc[curr.path] = (acc[curr.path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pagesData = Object.entries(viewsByPage)
    .map(([path, views]) => ({
      name: (path === '/' ? 'Home' : path.replace('/', '')).substring(0, 10),
      views,
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const viewsByReferrer = data.reduce((acc, curr) => {
    const ref = curr.referrer || 'Direct';
    const domain = ref === 'Direct' ? 'Direct' : new URL(ref).hostname.replace('www.', '');
    acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const referrerData = Object.entries(viewsByReferrer)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const viewsByCountry = data.reduce((acc, curr) => {
    const country = curr.country || 'Unknown';
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const countryData = Object.entries(viewsByCountry)
    .map(([name, value]) => ({ name: name.substring(0, 10), value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <DashboardContainer>
      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        {error && (
            <div style={{ flex: 1 }}>
                <div style={{ padding: '0.2rem 0.5rem', fontSize: '0.65rem', margin: 0, color: 'red', border: '1px solid red', borderRadius: '4px' }}>
                    {error}
                </div>
            </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
        <StatCard>
          <p>{t('layout:dashboard.metrics.hits')}</p>
          <h2>{totalViews}</h2>
        </StatCard>
        <StatCard>
          <p>{t('layout:dashboard.metrics.uniques')}</p>
          <h2>{uniqueVisitors}</h2>
        </StatCard>
        <StatCard>
          <p>{t('layout:dashboard.metrics.countries')}</p>
          <h2>{totalCountries}</h2>
        </StatCard>
        <StatCard>
          <p>{t('layout:dashboard.metrics.topPath')}</p>
          <h2>{pagesData[0]?.name || '/'}</h2>
        </StatCard>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', marginTop: '1rem' }}>
        <ChartWrapper $height="250px">
          <h4>{t('layout:dashboard.traffic')}</h4>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={dailyTraffic}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--blueprint-cyan-primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--blueprint-cyan-primary)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorUniques" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--blueprint-cyan-secondary)" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="var(--blueprint-cyan-secondary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--grid-line)" opacity={0.5} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={9} tick={{ fontFamily: 'var(--font-mono)' }} />
              <YAxis stroke="var(--text-secondary)" fontSize={9} tick={{ fontFamily: 'var(--font-mono)' }} />
              <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--bg-blueprint)', 
                    border: '1px solid var(--accent-color)', 
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    borderRadius: '4px'
                  }}
                  itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }} />
              <Area type="monotone" dataKey="views" name={t('layout:dashboard.charts.views')} stroke="var(--blueprint-cyan-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
              <Area type="monotone" dataKey="uniques" name={t('layout:dashboard.charts.uniques')} stroke="var(--blueprint-cyan-secondary)" strokeWidth={1.5} fillOpacity={1} fill="url(#colorUniques)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.5rem', marginTop: '1rem' }}>
        <ChartWrapper $height="250px">
          <h4>{t('layout:dashboard.pages')}</h4>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={pagesData} layout="vertical">
              <defs>
                <linearGradient id="colorBar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--blueprint-cyan-primary)" />
                  <stop offset="100%" stopColor="var(--blueprint-cyan-secondary)" />
                </linearGradient>
              </defs>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="var(--text-secondary)" fontSize={8} width={50} tick={{ fontFamily: 'var(--font-mono)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-blueprint)', 
                  border: '1px solid var(--accent-color)', 
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)'
                }} 
              />
              <Bar dataKey="views" fill="url(#colorBar)" radius={[0, 2, 2, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>

        <ChartWrapper $height="250px">
          <h4>{t('layout:dashboard.sources')}</h4>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={referrerData}
                cx="50%" cy="50%"
                outerRadius={65}
                innerRadius={45}
                paddingAngle={5}
                dataKey="value"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {referrerData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={BLUEPRINT_COLORS[index % BLUEPRINT_COLORS.length]} 
                    stroke="var(--bg-blueprint)" 
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-blueprint)', 
                  border: '1px solid var(--accent-color)', 
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '4px'
                }} 
              />
              <Legend verticalAlign="bottom" height={36} iconSize={10} wrapperStyle={{ fontSize: '10px', fontFamily: 'var(--font-mono)', marginTop: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>

        <ChartWrapper $height="250px">
            <h4>{t('layout:dashboard.topCountries')}</h4>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={countryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-line)" opacity={0.5} />
                    <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={8} tick={{ fontFamily: 'var(--font-mono)' }} />
                    <YAxis stroke="var(--text-secondary)" fontSize={8} tick={{ fontFamily: 'var(--font-mono)' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--bg-blueprint)', 
                        border: '1px solid var(--accent-color)', 
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)'
                      }} 
                    />
                    <Bar dataKey="value" fill="var(--blueprint-cyan-primary)" radius={[2, 2, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
      </div>
    </DashboardContainer>
  );
}
