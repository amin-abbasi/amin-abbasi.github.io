import { useState, useContext, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { styled, ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import StatsBar from './about/StatsBar';
import AvailabilityCard from './about/AvailabilityCard';
import { Theme } from '../theme/themes';

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

// ── By the Numbers ──────────────────────────────────────────────────────────── (Moved to modular component)

// ── Availability Card ───────────────────────────────────────────────────────── (Moved to modular component)

// ── Testimonials ─────────────────────────────────────────────────────────────
const TestimonialsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const TestimonialsTitle = styled.p`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 0.2rem;
    grid-column: 1 / -1;
    opacity: 0.8;
    text-align: start;
`;

const TestimonialCard = styled.div`
    padding: 24px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        transform: translateY(-4px);
    }

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

const TestimonialContent = styled.div<{ $expanded: boolean }>`
    position: relative;
    max-height: ${(props) => (props.$expanded ? '1000px' : '135px')};
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 12px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: linear-gradient(to bottom, transparent, ${(props) => (props.theme as Theme).cardBackground});
        opacity: ${(props) => (props.$expanded ? 0 : 1)};
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
`;

const TestimonialText = styled.p`
    font-size: 0.88rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}CC;
    margin: 0;
    padding-inline-start: 8px;
`;

const TestimonialAuthor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
    text-align: start;
`;

const AuthorMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const LinkedInLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 600;
    color: ${(props) => (props.theme as Theme).accentColor};
    text-decoration: none;
    opacity: 0.75;
    transition: all 0.2s ease;
    padding: 8px 12px;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    border-radius: 4px;
    background: ${(props) => (props.theme as Theme).accentColor}08;
    width: 100%;

    &:hover {
        opacity: 1;
        background: ${(props) => (props.theme as Theme).accentColor}12;
        border-color: ${(props) => (props.theme as Theme).accentColor}60;
    }
`;

const ExpandButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => (props.theme as Theme).accentColor};
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 8px;
    margin-top: 8px;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 4px;
    
    &:hover {
        opacity: 1;
    }
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
    const location = useLocation();
    const [expandedIds, setExpandedIds] = useState<string[]>([]);
    const toggleExpand = (id: string) => {
        setExpandedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    // Auto-expand and scroll to testimonial if URL param is present
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const expandName = params.get('expand');
        if (expandName) {
            setExpandedIds(prev => prev.includes(expandName) ? prev : [...prev, expandName]);
            
            // Wait for render, then scroll
            setTimeout(() => {
                const element = document.getElementById('testimonials');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [location]);

    const CHAR_LIMIT = 180;
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
                                <StatsBar stats={data.stats || []} />
                            </TextCol>

                            <ImageCol lg={5} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0 mt-lg-4">
                                <Fade direction="right" triggerOnce delay={200}>
                                    <ProfileSection>
                                        <ProfileImageContainer>
                                            <ProfileImage src={data.imageSource} alt="Amin Abbasi — Lead Software Engineer" loading="lazy" />
                                        </ProfileImageContainer>

                                        {data.quote && <QuoteText>{data.quote}</QuoteText>}

                                        {/* Availability Card */}
                                        {data.availability && <AvailabilityCard availability={data.availability} />}
                                    </ProfileSection>
                                </Fade>
                            </ImageCol>
                        </Row>

                        {/* Testimonials (Full Width) */}
                        {Array.isArray(data.testimonials) && data.testimonials.length > 0 && (
                            <Row className="mt-5" id="testimonials">
                                <Col xs={12}>
                                    <TestimonialsSection>
                                        <TestimonialsTitle>{t('layout:about.testimonials', { defaultValue: 'Testimonials' })}</TestimonialsTitle>
                                        {data.testimonials.map((testimonial: any) => {
                                            const isExpanded = expandedIds.includes(testimonial.name);
                                            const CHAR_LIMIT_FOR_BUTTON = 180;
                                            const hasExpansion = testimonial.text.length > CHAR_LIMIT_FOR_BUTTON;

                                            return (
                                                <TestimonialCard key={testimonial.name} id={`testimonial-${testimonial.name}`}>
                                                    <div style={{ flex: 1 }}>
                                                        <TestimonialContent $expanded={isExpanded}>
                                                            <TestimonialText>{testimonial.text}</TestimonialText>
                                                        </TestimonialContent>
                                                        
                                                        {hasExpansion && (
                                                            <ExpandButton onClick={() => toggleExpand(testimonial.name)}>
                                                                {isExpanded ? (
                                                                    <><LuChevronUp size={14} /> {t('layout:about.showLess', { defaultValue: 'Show less' })}</>
                                                                ) : (
                                                                    <><LuChevronDown size={14} /> {t('layout:about.showMore', { defaultValue: 'Show more' })}</>
                                                                )}
                                                            </ExpandButton>
                                                        )}
                                                    </div>

                                                    <TestimonialAuthor>
                                                        <AuthorMeta>
                                                            <AuthorBadge>{testimonial.initials}</AuthorBadge>
                                                            <AuthorInfo>
                                                                <strong>{testimonial.name}</strong>
                                                                <span>{testimonial.role}</span>
                                                            </AuthorInfo>
                                                        </AuthorMeta>
                                                        {testimonial.linkedinUrl && (
                                                            <LinkedInLink 
                                                                href={testimonial.linkedinUrl} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                title={t('layout:about.viewOnLinkedin', { defaultValue: 'View on LinkedIn' })}
                                                            >
                                                                <FaLinkedin size={14} />
                                                                {t('layout:about.viewOnLinkedin', { defaultValue: 'LinkedIn' })}
                                                            </LinkedInLink>
                                                        )}
                                                    </TestimonialAuthor>
                                                </TestimonialCard>
                                            );
                                        })}
                                    </TestimonialsSection>
                                </Col>
                            </Row>
                        )}
                    </Fade>
                ) : (
                    <FallbackSpinner />
                )}
            </AboutContainer>
        </>
    );
}

export default About;
