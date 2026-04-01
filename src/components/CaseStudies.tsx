import { useState, useContext } from 'react';
import { Head } from 'vite-react-ssg';
import { Container } from 'react-bootstrap';
import { styled, ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Header from '@components/Header';
import { Theme } from '@app/theme/themes';
import DiagramViewer from '@components/DiagramViewer';

// ── Layout ────────────────────────────────────────────────────────────────────
const MainContainer = styled.div`
    padding: 40px 0 80px;
`;

const IntroBlock = styled.div`
    max-width: 1200px;
    margin-bottom: 36px;
    border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
    padding-inline-start: 24px;
    font-size: 1rem;
    line-height: 1.8;
    color: ${(props) => (props.theme as Theme).color}CC;
    font-family: var(--font-main);
    text-align: start;
`;

// ── Case study card ───────────────────────────────────────────────────────────
const CaseCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardSecondaryBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    margin-bottom: 40px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        inset-inline-start: -1px;
        width: 14px;
        height: 14px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 6px 0 0 0;
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}35;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    }
`;

const CaseHeader = styled.div`
    padding: 28px 32px 22px;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    cursor: pointer;
    user-select: none;
`;

const CaseMeta = styled.div`
    flex: 1;
`;

const CaseLabel = styled.p`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin: 0 0 8px;
    opacity: 0.8;
    text-align: start;
`;

const CaseTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.35rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin: 0 0 6px;
    letter-spacing: -0.02em;
    text-align: start;
`;

const CaseSubtitle = styled.p`
    font-size: 0.88rem;
    color: ${(props) => (props.theme as Theme).color}88;
    margin: 0;
    text-align: start;
`;

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
`;

const Tag = styled.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    padding: 1px 6px;
    border-radius: 4px;
    background: ${(props) => (props.theme as Theme).accentColor}0D;
    color: ${(props) => (props.theme as Theme).accentColor};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}20;
`;

const ExpandIcon = styled.span<{ $open: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1.5px solid ${(props) => (props.theme as Theme).accentColor}40;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${(props) => (props.theme as Theme).accentColor};
    font-size: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(${(props) => props.$open ? '180deg' : '0deg'});
`;

const CaseBodyWrapper = styled.div<{ $open: boolean }>`
    display: grid;
    grid-template-rows: ${props => props.$open ? '1fr' : '0fr'};
    transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${(props) => (props.theme as Theme).cardBackground};
`;

const CaseBody = styled.div`
    overflow: hidden;
    min-height: 0;
    padding: 0 32px 32px;
`;

// ── Sections within the body ──────────────────────────────────────────────────
const Section = styled.div`
    margin-top: 1px;
    &:first-child { margin-top: 32px; }
`;

const SectionTitle = styled.h4`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin: 0 0 6px;
    opacity: 0.9;
    text-align: start;
`;

const SectionText = styled.div`
    font-size: 0.92rem;
    line-height: 1.5;
    color: ${(props) => (props.theme as Theme).color}CC;
    margin: 0;
    text-align: start;
    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
    }
    p { margin: 0; }
`;

const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    li {
        position: relative;
        padding-inline-start: 16px;
        font-size: 0.9rem;
        line-height: 1.65;
        color: ${(props) => (props.theme as Theme).color}CC;
        text-align: start;

        &::before {
            content: '▸';
            position: absolute;
            inset-inline-start: 0;
            color: ${(props) => (props.theme as Theme).accentColor};
            margin-top: -0.25em;
            font-size: 1.4em;
        }

        strong {
            color: ${(props) => (props.theme as Theme).accentColor};
            font-weight: 600;
        }
        
        p { display: inline; margin: 0; }
    }
`;

// ── Metrics row ───────────────────────────────────────────────────────────────
const MetricsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
`;

const MetricPill = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 18px;
    background: ${(props) => (props.theme as Theme).accentColor}0D;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}25;
    border-radius: 6px;
    text-align: start;
    min-width: 100px;
`;

const MetricValue = styled.span`
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    line-height: 1;
    margin-bottom: 4px;
`;

const MetricLabel = styled.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => (props.theme as Theme).color}66;
`;

// ── Divider ───────────────────────────────────────────────────────────────────
const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    margin: 16px 0;
`;

// ── Data ──────────────────────────────────────────────────────────────────────
interface Metric { value: string; label: string; }
interface CaseStudy {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    tags: string[];
    problem: string;
    approach: string[];
    decisions: { title: string; rationale: string }[];
    metrics: Metric[];
    outcome: string;
    diagram?: string;
}

interface CaseStudiesProps {
    header?: string;
}

export default function CaseStudies(props: CaseStudiesProps) {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const { header } = props;
    
    const introText = t('resCaseStudies:intro', { defaultValue: '' });
    const CASE_STUDIES = (t('resCaseStudies:studies', { returnObjects: true }) as CaseStudy[]) || [];
    
    // Safety check in case translation isn't loaded yet
    const initialOpenId = CASE_STUDIES.length > 0 ? CASE_STUDIES[0].id : '';
    const [openIds, setOpenIds] = useState<string[]>(initialOpenId ? [initialOpenId] : []);
    const toggle = (id: string) => {
        setOpenIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
    };

    return (
        <>
            <Head>
                <title>{header || t('layout:sections.caseStudies', { defaultValue: 'Case Studies' })} | Amin Abbasi</title>
                <meta name="description" content="Deep technical dives into architectural challenges and solutions in Fintech and HealthTech." />
            </Head>
            <Header title={header || t('layout:sections.caseStudies', { defaultValue: 'Case Studies' })} />
            <MainContainer>
                <Container fluid style={{ maxWidth: '1100px', padding: '0 24px' }}>
                    <Fade direction="up" triggerOnce duration={700}>
                        <IntroBlock style={{ whiteSpace: 'pre-line' }}>
                            {introText}
                        </IntroBlock>
                    </Fade>

                    {CASE_STUDIES.map((cs, i) => {
                        const isOpen = openIds.includes(cs.id);
                        return (
                            <Fade key={cs.id} direction="up" triggerOnce duration={600} delay={i * 100}>
                                <CaseCard>
                                    <CaseHeader onClick={() => toggle(cs.id)}>
                                        <CaseMeta>
                                            <CaseLabel>{cs.label}</CaseLabel>
                                            <CaseTitle>{cs.title}</CaseTitle>
                                            <CaseSubtitle>{cs.subtitle}</CaseSubtitle>
                                            <TagRow>
                                                {cs.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                                            </TagRow>
                                        </CaseMeta>
                                        <ExpandIcon $open={isOpen}>
                                            <ChevronUp size={14} strokeWidth={2.5} />
                                        </ExpandIcon>
                                    </CaseHeader>

                                    <CaseBodyWrapper $open={isOpen}>
                                        <CaseBody>
                                            {Boolean(cs.diagram) && (
                                                <Section>
                                                    <DiagramViewer code={cs.diagram!} id={cs.id} />
                                                </Section>
                                            )}

                                            {/* Problem */}
                                            <Section>
                                                <SectionTitle>{t('layout:caseStudies.problem')}</SectionTitle>
                                                <SectionText>
                                                    <ReactMarkdown>{cs.problem}</ReactMarkdown>
                                                </SectionText>
                                            </Section>

                                            <Divider />

                                            {/* Approach */}
                                            <Section>
                                                <SectionTitle>{t('layout:caseStudies.approach')}</SectionTitle>
                                                <BulletList>
                                                    {cs.approach.map((point, idx) => (
                                                        <li key={idx}>
                                                            <ReactMarkdown>{point}</ReactMarkdown>
                                                        </li>
                                                    ))}
                                                </BulletList>
                                            </Section>

                                            <Divider />

                                            {/* Key Decisions */}
                                            <Section>
                                                <SectionTitle>{t('layout:caseStudies.decisions')}</SectionTitle>
                                                {cs.decisions.map((d, idx) => (
                                                    <div key={idx} style={{ 
                                                        marginBottom: idx < cs.decisions.length - 1 ? 12 : 0,
                                                        textAlign: 'start',
                                                        lineHeight: 0.75
                                                    }}>
                                                        <span style={{
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.88rem',
                                                            fontWeight: 700,
                                                            color: theme.accentColor,
                                                            marginInlineEnd: '4px'
                                                        }}>◆ {d.title}:</span>
                                                        <span style={{ fontSize: '0.88rem', color: theme.color + 'BB' }}>{d.rationale}</span>
                                                    </div>
                                                ))}
                                            </Section>

                                            <Divider />

                                            {/* Metrics */}
                                            <Section>
                                                <SectionTitle>{t('layout:caseStudies.metrics')}</SectionTitle>
                                                <MetricsRow>
                                                    {cs.metrics.map((m) => (
                                                        <MetricPill key={m.label}>
                                                            <MetricValue>{m.value}</MetricValue>
                                                            <MetricLabel>{m.label}</MetricLabel>
                                                        </MetricPill>
                                                    ))}
                                                </MetricsRow>
                                            </Section>

                                            <Divider />

                                            {/* Outcome */}
                                            <Section>
                                                <SectionTitle>{t('layout:caseStudies.outcome')}</SectionTitle>
                                                <SectionText>
                                                    <ReactMarkdown>{cs.outcome}</ReactMarkdown>
                                                </SectionText>
                                            </Section>
                                        </CaseBody>
                                    </CaseBodyWrapper>
                                </CaseCard>
                            </Fade>
                        );
                    })}
                </Container>
            </MainContainer>
        </>
    );
}
