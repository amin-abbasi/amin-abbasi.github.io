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

const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'sdui-dannie',
        label: 'CASE_001 · ERP / Industrial',
        title: 'Server-Driven UI Framework for an Industrial ERP',
        subtitle: 'Dannie.CC · 2023–2024',
        tags: ['Node.js', 'TypeScript', 'WebSocket', 'ArangoDB', 'SDUI', 'ERP', 'Real-time'],
        problem:
            'The Dannie.CC ERP served 9 departments across a manufacturing facility. Every UI change required a full frontend deployment cycle averaging 3–4 hours, blocking product velocity and forcing QA to retest hundreds of screens per release. The frontend team was perpetually blocked by the backend release schedule.',
        approach: [
            'Designed a JSON-based UI schema that the backend emits over WebSocket connections — each "module descriptor" contains component type, data bindings, conditional visibility rules, and action handlers.',
            'Built a thin React frontend runtime that interprets these descriptors and renders accordingly, with zero application-specific logic in the frontend codebase.',
            'Implemented a versioning system for schema changes so legacy clients could gracefully degrade without hard failures.',
            'Added a server-side A/B testing layer by emitting different module descriptors based on user roles and feature flags.',
        ],
        decisions: [
            {
                title: 'WebSocket over HTTP polling',
                rationale: 'The ERP needed real-time production line data. REST polling would have introduced 500ms–2s latency that operators found unacceptable for quality control decisions. WebSocket allowed us to push UI state AND data in a single channel.',
            },
            {
                title: 'JSON schema over GraphQL fragments',
                rationale: 'GraphQL was considered but rejected — the UI schema needed to be fully server-controlled with no client-side query negotiation. A simple JSON contract gave us full control over what the server renders without client-side complexity.',
            },
        ],
        metrics: [
            { value: '80%', label: 'Fewer frontend deployments' },
            { value: '1 week', label: 'Feature delivery (from 1 month)' },
            { value: '9', label: 'Departments unified' },
            { value: '35%', label: 'Response time improvement' },
        ],
        outcome:
            'The SDUI approach eliminated 80% of frontend deployments while allowing the product team to iterate on UI modules daily. QA scope per release dropped dramatically. The architecture later became the foundation for the company\'s IATF 16949 certification alignment, as all business logic remained server-side and fully auditable.',
    },
    {
        id: 'trading-engine-digialpha',
        label: 'CASE_002 · Fintech / High-Frequency Trading',
        title: 'High-Frequency Crypto Exchange Trading Engine',
        subtitle: 'DigiAlpha · 2021–2022',
        tags: ['Node.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Microservices', 'HD Wallet', 'KYC'],
        problem:
            'DigiAlpha needed to build a crypto exchange from scratch supporting Spot, OTC, Margin, Copy-Trading, and Stop-Loss orders. The primary challenge was building a lock-free order matching engine that could process thousands of orders per second without parallel execution bottlenecks — while maintaining exact ledger accuracy across complex multi-currency positions.',
        approach: [
            'Designed a non-blocking order matching algorithm using an immutable event log as the source of truth, with in-memory order books rebuilt from events on startup.',
            'Partitioned the microservices by domain: Order Management, Matching Engine, Wallet Service, Ledger, Price Feed, KYC Service — each with its own database and event queue.',
            'Used RabbitMQ topic exchanges to broadcast price feed updates and wallet balance changes across services with guaranteed ordering and zero message loss.',
            'Implemented a proprietary HD Wallet service that derived user addresses deterministically from a master seed, enabling address rotation without re-issuance.',
            'Built a 3-tier KYC pipeline integrating national ID verification, bank account linking, and liveness detection — gating trading limits at each tier.',
        ],
        decisions: [
            {
                title: 'Single-threaded matching engine over distributed actor model',
                rationale: 'A distributed matching engine would have introduced consensus latency. The matching algorithm was designed to run single-threaded within a single Node.js process with an external event queue feeding it. This eliminated distributed locking and gave us deterministic execution order — critical for audit trails.',
            },
            {
                title: 'Internal ledger vs. relying on blockchain confirmations',
                rationale: 'Waiting for on-chain confirmations for every trade would have made the UX unusable. We maintained an internal double-entry ledger for virtual balances, with a separate reconciliation process that settled confirmed blockchain transactions asynchronously.',
            },
        ],
        metrics: [
            { value: '30%', label: 'Faster order matching' },
            { value: '2×', label: 'System throughput gain' },
            { value: '9', label: 'Engineers scaled to' },
            { value: '0', label: 'Message loss events' },
        ],
        outcome:
            'The exchange launched supporting 5 trading modes within 12 months. The event-driven architecture handled peak trading volumes during high-volatility market events with zero message loss. The platform later expanded to include Copy-Trading — a feature only possible because of the clean separation between order execution and portfolio mirror logic.',
    },
    {
        id: 'fhir-actimi',
        label: 'CASE_003 · HealthTech / FHIR Compliance',
        title: 'FHIR-Compliant Healthcare Data Platform',
        subtitle: 'Actimi GmbH · 2022–2023',
        tags: ['Node.js', 'TypeScript', 'FHIR', 'Aidbox', 'Medplum', 'PostgreSQL', 'GDPR', 'HIPAA', 'GCP', 'CI/CD'],
        problem:
            'Actimi provided remote patient monitoring for German healthcare providers. The platform needed to be simultaneously FHIR R4 compliant, GDPR/HIPAA compliant, and capable of managing a distributed fleet of patient tablets. The main technical debt: heavy reliance on raw JSON storage in PostgreSQL without proper FHIR resource indexing, causing query latency above 800ms for complex clinical queries.',
        approach: [
            'Redesigned the PostgreSQL schema to align with FHIR resource types, adding targeted GIN indexes on FHIR search parameters (patient.name, observation.code, encounter.date).',
            'Evaluated Aidbox vs. Medplum as FHIR server layers and built adapters for both, allowing the platform to operate on either depending on client requirements.',
            'Built a GDPR-compliant device lifecycle system: each patient tablet had a unique UUID tied to its assignment; re-assignment triggered an automated wipe + UUID regeneration workflow via Zoho MDM API.',
            'Containerized all services with Docker and restructured the GCP CI/CD pipeline, introducing staging environments and parallel test execution.',
        ],
        decisions: [
            {
                title: 'Dual FHIR adapter over single vendor lock-in',
                rationale: 'German healthcare clients had different procurement preferences. Rather than betting on one FHIR server vendor, we built thin adapters over both Aidbox and Medplum, with the business logic layer remaining vendor-agnostic. This added 3 weeks of development but saved 3+ months of future migration risk.',
            },
            {
                title: 'MDM-based wipe vs. application-layer data deletion',
                rationale: 'GDPR requires verifiable data erasure. Application-layer deletion leaves database artifacts. MDM-enforced factory wipe gave us a hardware-level audit trail that satisfied German DPA (Datenschutzbehörde) requirements without code complexity.',
            },
        ],
        metrics: [
            { value: '30%', label: 'Query latency reduction' },
            { value: '85%', label: 'CI/CD time improvement' },
            { value: '100%', label: 'GDPR & HIPAA compliance' },
            { value: '1 month', label: 'Onboarding (from 3 months)' },
        ],
        outcome:
            'Clinical query latency dropped from 800ms+ to under 560ms. The device lifecycle system processed 300+ patient transitions without a single GDPR audit finding. The TypeScript migration reduced developer onboarding from 3 months to 1 month, enabling faster team expansion as Actimi grew its provider network across Germany.',
    },
];

// ── Component ─────────────────────────────────────────────────────────────────
interface CaseStudiesProps {
    header?: string;
}

function CaseStudies(props: CaseStudiesProps) {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const { header } = props;
    const [openIds, setOpenIds] = useState<string[]>([CASE_STUDIES[0].id]);

    const toggle = (id: string) => {
        setOpenIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
    };

    return (
        <>
            <Header title={header || t('layout:sections.caseStudies', { defaultValue: 'Case Studies' })} />
            <MainContainer>
                <Container fluid style={{ maxWidth: '1100px', padding: '0 24px' }}>
                    <Fade direction="up" triggerOnce duration={700}>
                        <IntroBlock>
                            Real architectural challenges I've solved — the problem, the decisions, the tradeoffs, and the measurable outcomes.
                            No proprietary code shared; this is about the thinking.
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

export default CaseStudies;
