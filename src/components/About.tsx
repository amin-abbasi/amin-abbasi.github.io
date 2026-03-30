import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LuDownload } from 'react-icons/lu';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import { Theme } from '../theme/themes';
import { CV_DOWNLOAD_URL } from '../constants/config';

const AboutContainer = styled(Container)`
    padding-top: 2rem;
    padding-bottom: 4rem;
    overflow-x: hidden;
`;

const TextCol = styled(Col)`
    flex-direction: column;
    text-align: start;
    font-size: 1.05em;
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;

    @media (min-width: 992px) {
        padding-inline-end: 4rem;
    }

    h3, h4 {
        font-family: var(--font-mono);
        font-weight: 700;
        letter-spacing: -0.02em;
    }

    h3 {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        color: ${(props) => (props.theme as Theme).accentColor};
        font-size: 1.5rem;
    }

    h4 {
        margin-top: 1.8rem;
        margin-bottom: 1rem;
        color: ${(props) => (props.theme as Theme).color};
        font-size: 1.2rem;
    }

    p {
        margin-bottom: 1.5rem;
        color: ${(props) => (props.theme as Theme).color}DD;
    }

    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
    }
`;

const ImageCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    z-index: 1;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;

const ProfileImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 3px solid ${(props) => (props.theme as Theme).accentColor};

    &::after {
        content: '';
        position: absolute;
        width: 250px;
        height: 250px;
        background: ${(props) => (props.theme as Theme).accentColor};
        filter: blur(80px);
        opacity: 0.35;
        border-radius: 50%;
        animation: floatOrb 8s ease-in-out infinite;
        z-index: 0;
        top: 20%;
    }

    @keyframes floatOrb {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
    }
`;

const QuoteText = styled.div`
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.88rem;
    font-style: italic;
    color: ${(props) => (props.theme as Theme).color}BB;
    text-align: center;
    position: relative;
    padding: 0 14px;
    width: 100%;
    max-width: 100%;
    word-break: break-word;
    line-height: 1.4;

    &::before,
    &::after {
        content: '"';
        color: ${(props) => (props.theme as Theme).accentColor}80;
        font-size: 1.5rem;
        position: absolute;
        top: -10px;
    }
    &::before { inset-inline-start: 0; }
    &::after { inset-inline-end: 0; }
`;

const ProfileImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    z-index: 2;
    position: relative;
    filter: drop-shadow(0 0 10px ${(props) => (props.theme as Theme).accentColor}40);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.08);
        filter: drop-shadow(0 0 40px ${(props) => (props.theme as Theme).accentColor});
    }
`;

// ── By the Numbers ────────────────────────────────────────────────────────────
const StatsBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin: 2rem 0;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    overflow: hidden;
`;

const StatItem = styled.div`
    flex: 1;
    min-width: 120px;
    text-align: center;
    padding: 16px 12px;
    border-right: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    position: relative;

    &:last-child {
        border-right: none;
    }
`;

const StatValue = styled.div`
    font-family: var(--font-mono);
    font-size: 1.7rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    line-height: 1;
    margin-bottom: 4px;
`;

const StatLabel = styled.div`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => (props.theme as Theme).color}77;
`;

// ── Availability Card ─────────────────────────────────────────────────────────
const AvailabilityCard = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    margin-top: 2rem;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset-inline-start: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: ${(props) => (props.theme as Theme).accentColor};
        border-radius: 0 2px 2px 0;
    }
`;

const PulseDot = styled.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00e676;
    display: inline-block;
    flex-shrink: 0;
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
    animation: availPulse 2s infinite;

    @keyframes availPulse {
        0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7); }
        70% { box-shadow: 0 0 0 8px rgba(0, 230, 118, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
    }
`;

const AvailText = styled.div`
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.5;
    color: ${(props) => (props.theme as Theme).color}CC;

    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
    }
`;

// ── Testimonials ─────────────────────────────────────────────────────────────
const TestimonialsSection = styled.div`
    margin-top: 3rem;
`;

const TestimonialsTitle = styled.p`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 1.2rem;
    opacity: 0.8;
`;

const TestimonialCard = styled.div`
    padding: 20px 24px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    margin-bottom: 1rem;
    position: relative;

    &::before {
        content: '"';
        position: absolute;
        top: 8px;
        inset-inline-start: 16px;
        font-size: 3rem;
        line-height: 1;
        color: ${(props) => (props.theme as Theme).accentColor};
        opacity: 0.25;
        font-family: var(--font-mono);
    }
`;

const TestimonialText = styled.p`
    font-size: 0.9rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}CC;
    margin: 0 0 12px;
    padding-inline-start: 8px;
`;

const TestimonialAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const AuthorBadge = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => (props.theme as Theme).accentColor}20;
    border: 1.5px solid ${(props) => (props.theme as Theme).accentColor}40;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    flex-shrink: 0;
`;

const AuthorInfo = styled.div`
    font-family: var(--font-mono);
    font-size: 0.72rem;

    strong {
        display: block;
        color: ${(props) => (props.theme as Theme).color};
        font-weight: 600;
    }
    span {
        color: ${(props) => (props.theme as Theme).color}66;
    }
`;

// ── CV Download ───────────────────────────────────────────────────────────────
const CVButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 24px;
    margin-top: 2rem;
    background: ${(props) => (props.theme as Theme).accentColor};
    color: #fff;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;

    &:hover {
        filter: brightness(1.12);
        transform: translateY(-1px);
        color: #fff;
    }

    svg { flex-shrink: 0; }
`;

// ── Data interfaces ───────────────────────────────────────────────────────────
interface StatEntry {
    value: string;
    label: string;
}

interface Availability {
    location: string;
    timezone: string;
    status: string;
    remote: boolean;
}

interface AboutData {
    about: string;
    quote?: string;
    imageSource: string;
    stats?: StatEntry[];
    availability?: Availability;
}

interface AboutProps {
    header?: string;
}


function About(props: AboutProps) {
    const { t } = useTranslation();
    const { header } = props;
    const data = {
        about: t('resAbout:about'),
        quote: t('resAbout:quote', { defaultValue: '' }),
        imageSource: t('resAbout:imageSource'),
        stats: t('resAbout:stats', { returnObjects: true }),
        availability: t('resAbout:availability', { returnObjects: true }),
        testimonials: t('resAbout:testimonials', { returnObjects: true }),
    } as AboutData & { testimonials?: any[] };

    return (
        <>
            <Header title={header || t('layout:sections.about')} />
            <AboutContainer>
                {data ? (
                    <Fade triggerOnce duration={1000}>
                        <Row className="align-items-center align-items-lg-start">
                            <TextCol lg={7} md={12} className="order-2 order-lg-1">
                                <ReactMarkdown>{data.about}</ReactMarkdown>

                                {/* By the Numbers */}
                                {Array.isArray(data.stats) && data.stats.length > 0 && (
                                    <Fade direction="up" triggerOnce delay={200}>
                                        <StatsBar>
                                            {data.stats.map((s) => (
                                                <StatItem key={s.label}>
                                                    <StatValue>{s.value}</StatValue>
                                                    <StatLabel>{s.label}</StatLabel>
                                                </StatItem>
                                            ))}
                                        </StatsBar>
                                    </Fade>
                                )}

                                 {/* Testimonials */}
                                {Array.isArray(data.testimonials) && data.testimonials.length > 0 && (
                                    <TestimonialsSection>
                                        <TestimonialsTitle>{t('layout:about.testimonials')}</TestimonialsTitle>
                                        {data.testimonials.map((testimonial: any) => (
                                            <TestimonialCard key={testimonial.name}>
                                                <TestimonialText>{testimonial.text}</TestimonialText>
                                                <TestimonialAuthor>
                                                    <AuthorBadge>{testimonial.initials}</AuthorBadge>
                                                    <AuthorInfo>
                                                        <strong>{testimonial.name}</strong>
                                                        <span>{testimonial.role}</span>
                                                    </AuthorInfo>
                                                </TestimonialAuthor>
                                            </TestimonialCard>
                                        ))}
                                    </TestimonialsSection>
                                )}

                                {/* CV Download */}
                                <CVButton 
                                    href={CV_DOWNLOAD_URL} 
                                    download="Amin_Abbasi_CV.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <LuDownload size={15} />
                                    {t('layout:buttons.downloadCv')}
                                </CVButton>
                            </TextCol>

                            <ImageCol lg={5} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0 mt-lg-4">
                                <Fade direction="right" triggerOnce delay={200}>
                                    <ProfileSection>
                                        <ProfileImageContainer>
                                            <ProfileImage src={data.imageSource} alt="Amin Abbasi — Lead Software Engineer" loading="lazy" />
                                        </ProfileImageContainer>

                                        {data.quote && <QuoteText>{data.quote}</QuoteText>}

                                        {/* Availability Card */}
                                        {data.availability && (
                                            <AvailabilityCard>
                                                <PulseDot />
                                                <AvailText>
                                                    <strong style={{ display: 'block', marginBottom: '4px' }}>{data.availability.status}</strong>
                                                    <span>
                                                        {data.availability.location} &middot; {data.availability.timezone}
                                                        {data.availability.remote && ' \u00B7 Remote OK'}
                                                    </span>
                                                </AvailText>
                                            </AvailabilityCard>
                                        )}
                                    </ProfileSection>
                                </Fade>
                            </ImageCol>
                        </Row>
                    </Fade>
                ) : (
                    <FallbackSpinner />
                )}
            </AboutContainer>
        </>
    );
}

export default About;
