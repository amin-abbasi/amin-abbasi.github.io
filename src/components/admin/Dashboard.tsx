import Header from 'components/Header';
import { configs } from 'constants/configs';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { styled, createGlobalStyle } from 'styled-components';

// Hide global footer on the dashboard to save space
const HideFooterStyle = createGlobalStyle`
  footer { display: none !important; }
`;

const DashboardContainer = styled(Container)`
  padding-bottom: 0.5rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
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
    margin: 0;
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
  height: ${props => props.$height || '200px'};
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

const COLORS = ['#00a0ff', '#00ffcc', '#ffcc00', '#ff3366', '#9933ff', '#66ff33', '#33ccff'];

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
        <h3 className="text-center mt-5" style={{ color: '#00a0ff', fontSize: '1rem' }}>INITIALIZING ENGINE...</h3>
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
    <DashboardContainer fluid>
      <HideFooterStyle />
      <Header title="Analytics" />
      <Row className="mb-2 align-items-center g-2 mt-4">
        {error && (
            <Col>
                <Alert variant="danger" style={{ padding: '0.2rem 0.5rem', fontSize: '0.65rem', margin: 0 }}>
                    {error}
                </Alert>
            </Col>
        )}
      </Row>

      <Row className="g-2">
        <Col md={3} sm={6}>
          <StatCard>
            <p>Total Hits</p>
            <h2>{totalViews}</h2>
          </StatCard>
        </Col>
        <Col md={3} sm={6}>
          <StatCard>
            <p>Uniques</p>
            <h2>{uniqueVisitors}</h2>
          </StatCard>
        </Col>
        <Col md={3} sm={6}>
          <StatCard>
            <p>Countries</p>
            <h2>{totalCountries}</h2>
          </StatCard>
        </Col>
        <Col md={3} sm={6}>
          <StatCard>
            <p>Top Path</p>
            <h2>{pagesData[0]?.name || '/'}</h2>
          </StatCard>
        </Col>
      </Row>

      <Row className="g-2">
        <Col lg={12}>
          <ChartWrapper $height="250px">
            <h4>Traffic (Last 14 Days)</h4>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={dailyTraffic}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.05} />
                <XAxis dataKey="name" stroke="#8b949e" fontSize={9} />
                <YAxis stroke="#8b949e" fontSize={9} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#0d1117', border: '1px solid #30363d', fontSize: '0.7rem' }}
                />
                <Legend iconSize={8} wrapperStyle={{ fontSize: '0.65rem' }} />
                <Line type="monotone" dataKey="views" name="Views" stroke="#00a0ff" strokeWidth={2} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="uniques" name="Uniques" stroke="#00ffcc" strokeWidth={1.5} dot={{ r: 1.5 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>
      </Row>

      <Row className="g-2">
        <Col lg={4}>
          <ChartWrapper $height="180px">
            <h4>Pages</h4>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={pagesData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#8b949e" fontSize={8} width={50} />
                <Tooltip />
                <Bar dataKey="views" fill="#00a0ff" radius={[0, 2, 2, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>

        <Col lg={4}>
          <ChartWrapper $height="180px">
            <h4>Sources</h4>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={referrerData}
                  cx="50%" cy="50%"
                  outerRadius={50}
                  innerRadius={30}
                  dataKey="value"
                  label={({ name }) => (name || '').substring(0, 6)}
                  style={{ fontSize: '8px' }}
                >
                  {referrerData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Col>

        <Col lg={4}>
            <ChartWrapper $height="180px">
                <h4>Top Countries</h4>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={countryData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.05} />
                        <XAxis dataKey="name" stroke="#8b949e" fontSize={8} />
                        <YAxis stroke="#8b949e" fontSize={8} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#9933ff" radius={[2, 2, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </Col>
      </Row>
    </DashboardContainer>
  );
}
