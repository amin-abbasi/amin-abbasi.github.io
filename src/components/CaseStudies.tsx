import { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { styled, ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import { Theme } from '../theme/themes';

// ── Layout ────────────────────────────────────────────────────────────────────
const MainContainer = styled.div`
    padding: 40px 0 80px;
`;

const IntroBlock = styled.div`
    max-width: 720px;
    margin-bottom: 56px;
    border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
    padding-inline-start: 24px;
    font-size: 1rem;
    line-height: 1.8;
    color: ${(props) => (props.theme as Theme).color}CC;
    font-family: var(--font-main);
`;

// ── Case study card ───────────────────────────────────────────────────────────
const CaseCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardBackground};
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
`;

const CaseTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.35rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin: 0 0 6px;
    letter-spacing: -0.02em;
`;

const CaseSubtitle = styled.p`
    font-size: 0.88rem;
    color: ${(props) => (props.theme as Theme).color}88;
    margin: 0;
`;

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 12px;
`;

const Tag = styled.span`
    font-family: var(--font-mono);
    font-size: 0.6rem;
    padding: 3px 9px;
    border-radius: 3px;
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

const CaseBody = styled.div<{ $open: boolean }>`
    display: ${(props) => props.$open ? 'block' : 'none'};
    padding: 28px 32px 32px;
`;

// ── Sections within the body ──────────────────────────────────────────────────
const Section = styled.div`
    margin-bottom: 28px;

    &:last-child { margin-bottom: 0; }
`;

const SectionTitle = styled.h4`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin: 0 0 12px;
    opacity: 0.9;
`;

const SectionText = styled.p`
    font-size: 0.92rem;
    line-height: 1.75;
    color: ${(props) => (props.theme as Theme).color}CC;
    margin: 0;
`;

const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
        position: relative;
        padding-inline-start: 22px;
        font-size: 0.9rem;
        line-height: 1.65;
        color: ${(props) => (props.theme as Theme).color}CC;

        &::before {
            content: '▸';
            position: absolute;
            inset-inline-start: 0;
            color: ${(props) => (props.theme as Theme).accentColor};
            margin-top: -0.25em;
            font-size: 1.4em;
        }
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
    text-align: center;
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
    font-size: 0.6rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => (props.theme as Theme).color}66;
`;

// ── Divider ───────────────────────────────────────────────────────────────────
const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    margin: 24px 0;
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
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="18 15 12 9 6 15"/>
                                            </svg>
                                        </ExpandIcon>
                                    </CaseHeader>

                                    <CaseBody $open={isOpen}>
                                        {/* Problem */}
                                        <Section>
                                            <SectionTitle>// The Problem</SectionTitle>
                                            <SectionText>{cs.problem}</SectionText>
                                        </Section>

                                        <Divider />

                                        {/* Approach */}
                                        <Section>
                                            <SectionTitle>// Approach & Design</SectionTitle>
                                            <BulletList>
                                                {cs.approach.map((point, idx) => <li key={idx}>{point}</li>)}
                                            </BulletList>
                                        </Section>

                                        <Divider />

                                        {/* Key Decisions */}
                                        <Section>
                                            <SectionTitle>// Key Architecture Decisions</SectionTitle>
                                            {cs.decisions.map((d, idx) => (
                                                <div key={idx} style={{ marginBottom: idx < cs.decisions.length - 1 ? 20 : 0 }}>
                                                    <p style={{
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '0.82rem',
                                                        fontWeight: 700,
                                                        color: theme.color,
                                                        margin: '0 0 6px',
                                                    }}>
                                                        ◆ {d.title}
                                                    </p>
                                                    <p style={{
                                                        fontSize: '0.88rem',
                                                        lineHeight: 1.7,
                                                        color: theme.color + 'BB',
                                                        margin: 0,
                                                        paddingInlineStart: 18,
                                                    }}>
                                                        {d.rationale}
                                                    </p>
                                                </div>
                                            ))}
                                        </Section>

                                        <Divider />

                                        {/* Metrics */}
                                        <Section>
                                            <SectionTitle>// Measurable Outcomes</SectionTitle>
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
                                            <SectionTitle>// What We Shipped</SectionTitle>
                                            <SectionText>{cs.outcome}</SectionText>
                                        </Section>
                                    </CaseBody>
                                </CaseCard>
                            </Fade>
                        );
                    })}
                </Container>
            </MainContainer>
        </>
    );
}

