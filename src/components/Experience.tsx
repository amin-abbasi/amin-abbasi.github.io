import { useContext } from 'react';
import { Container, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { styled, ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import { Theme } from '../theme/themes';

// ── Layout shell ─────────────────────────────────────────────────────────────
const MainContainer = styled.div`
    padding: 40px 0 80px;
    position: relative;
`;

// ── Vertical timeline track ───────────────────────────────────────────────────
const TimelineTrack = styled.div`
    position: relative;
    padding-inline-start: 80px;

    @media (max-width: 768px) {
        padding-inline-start: 0;
    }

    &::before {
        content: '';
        position: absolute;
        inset-inline-start: 28px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: ${(props) => (props.theme as Theme).timelineLineColor};

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

// ── One experience entry ──────────────────────────────────────────────────────
const EntryWrapper = styled.div`
    position: relative;
    margin-top: 0.4em;
    margin-bottom: 120px;

    @media (max-width: 768px) {
        margin-bottom: 80px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

// Connector dot on the track
const TrackDot = styled.div<{ $accent: string }>`
    position: absolute;
    inset-inline-start: -56px;
    top: 30px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${(p) => p.$accent};
    background: ${(props) => (props.theme as Theme).background};
    box-shadow: 0 0 8px ${(p) => p.$accent}60;

    @media (max-width: 768px) {
        display: none;
    }
`;

// Schematic entry card
const Card = styled.div`
    padding: 28px 32px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    position: relative;
    transition: all 0.3s ease;

    /* Blueprint corner accents */
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
    }
    &::before {
        top: -1px;
        left: -1px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 6px 0 0 0;
    }
    &::after {
        bottom: -1px;
        right: -1px;
        border-bottom: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-end: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 0 0 6px 0;
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 4px;
`;

const JobTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
    color: ${(props) => (props.theme as Theme).color};
`;

const DateBadge = styled.span`
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) => (props.theme as Theme).accentColor};
    background: ${(props) => (props.theme as Theme).accentColor}12;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    padding: 4px 12px;
    border-radius: 4px;
    letter-spacing: 0.05em;
    white-space: nowrap;
`;

const SubtitleRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const CompanyName = styled.span`
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 500;
    color: ${(props) => (props.theme as Theme).color}AA;
    letter-spacing: 0.05em;

    &::before {
        content: '@ ';
        color: ${(props) => (props.theme as Theme).accentColor};
    }
`;

const WorkTypeBadge = styled.span`
    font-family: var(--font-mono);
    font-size: 0.64rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: transparent;
    color: ${(props) => (props.theme as Theme).accentColor};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}40;
    padding: 3px 10px;
    border-radius: 50px; /* Force pill shape */
    display: inline-flex;
    align-items: center;
    line-height: 1;
    white-space: nowrap;
`;

const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;

    li {
        position: relative;
        padding-inline-start: 24px;
        font-size: 0.95rem;
        line-height: 1.7;
        color: ${(props) => (props.theme as Theme).color}CC;
        text-align: start;

        &::before {
            content: '▸';
            margin-top: -0.3em;
            position: absolute;
            inset-inline-start: 0;
            color: ${(props) => (props.theme as Theme).accentColor};
            font-size: 1.5em;
        }
    }
`;

// ── Transfer connector between cards ─────────────────────────────────────────
const ConnectorLabel = styled.div`
    position: absolute;
    inset-inline-start: -80px;
    top: 0;
    bottom: 0;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-inline-end: 8px;

    @media (max-width: 768px) {
        display: none;
    }
`;

// ── Tech Stack tags ───────────────────────────────────────────────────────────
const TechStackRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
`;

const TechTag = styled.span`
    font-family: var(--font-mono);
    font-size: 0.62rem;
    font-weight: 500;
    padding: 3px 9px;
    border-radius: 3px;
    background: ${(props) => (props.theme as Theme).accentColor}0D;
    color: ${(props) => (props.theme as Theme).accentColor};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}20;
    letter-spacing: 0.04em;
    transition: all 0.15s ease;

    &:hover {
        background: ${(props) => (props.theme as Theme).accentColor}18;
        border-color: ${(props) => (props.theme as Theme).accentColor}45;
    }
`;

// ── Promoted connector ────────────────────────────────────────────────────────
const PromotionBanner = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: -90px 0 30px;
    position: relative;
    z-index: 5;

    @media (max-width: 768px) {
        margin: -40px 0 20px;
    }
`;

const PromotionPill = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    background: ${(props) => (props.theme as Theme).accentColor}15;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}40;
    border-radius: 50px;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
`;

// ── Index counter ─────────────────────────────────────────────────────────────
const EntryIndex = styled.div`
    font-family: var(--font-mono);
    font-size: 0.6rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.5;
    letter-spacing: 0.1em;
`;

// ─────────────────────────────────────────────────────────────────────────────

interface ExperienceItem {
    title: string;
    subtitle: string;
    dateText: string;
    workType?: string;
    promoted?: boolean;
    promotionNote?: string;
    techStack?: string[];
    workDescription: string[];
}

interface ExperienceProps {
    header?: string;
}

function Experience(props: ExperienceProps) {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const { header } = props;
    const data = t('resExperiences:experiences', { returnObjects: true }) as ExperienceItem[];

    return (
        <>
            <Header title={header || t('layout:sections.experience')} />

            {data ? (
                <MainContainer>
                    <Container fluid style={{ maxWidth: '1400px', padding: '0 24px' }}>
                        <TimelineTrack>
                            {data.map((item, index) => (
                                <Fade key={`${item.title}-${index}`} direction="up" triggerOnce duration={600} delay={index * 80}>
                                    <EntryWrapper>
                                        <ConnectorLabel>
                                            <EntryIndex>{String(index + 1).padStart(2, '0')}</EntryIndex>
                                        </ConnectorLabel>

                                        <TrackDot $accent={theme.accentColor} />

                                        {/* Promoted connector — show between the two Dannie.CC entries */}
                                        {item.promotionNote && (
                                            <PromotionBanner>
                                                <PromotionPill>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                        <polyline points="18 15 12 9 6 15"/>
                                                    </svg>
                                                    {item.promotionNote}
                                                </PromotionPill>
                                            </PromotionBanner>
                                        )}

                                        <Card>
                                            <CardHeader>
                                                <JobTitle>{item.title}</JobTitle>
                                                <DateBadge>{item.dateText}</DateBadge>
                                            </CardHeader>
                                            <SubtitleRow>
                                                <CompanyName>{item.subtitle}</CompanyName>
                                                {item.workType && (<WorkTypeBadge>{item.workType}</WorkTypeBadge>)}
                                            </SubtitleRow>
                                            <BulletList>
                                                {item.workDescription.map((point, idx) => (
                                                    <li key={idx}>
                                                        <ReactMarkdown components={{ p: 'span' }}>{point}</ReactMarkdown>
                                                    </li>
                                                ))}
                                            </BulletList>
                                            {/* Tech Stack */}
                                            {item.techStack && item.techStack.length > 0 && (
                                                <TechStackRow>
                                                    {item.techStack.map((tech) => (
                                                        <TechTag key={tech}>{tech}</TechTag>
                                                    ))}
                                                </TechStackRow>
                                            )}
                                        </Card>
                                    </EntryWrapper>
                                </Fade>
                            ))}
                        </TimelineTrack>
                    </Container>
                </MainContainer>
            ) : (
                <FallbackSpinner />
            )}
        </>
    );
}

export default Experience;
