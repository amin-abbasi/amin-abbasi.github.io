import { useContext } from 'react';
import { styled, ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import { LuQuote, LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Theme } from '../theme/themes';

const CardWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    max-width: 600px;
    padding: 24px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 8px;
    position: relative;
    text-align: start;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
`;

const QuoteIcon = styled.div`
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.2;
    position: absolute;
    top: 16px;
    left: 16px;
`;

const SummaryText = styled.p`
    font-family: var(--font-main);
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${(props) => (props.theme as Theme).color}EE;
    margin-bottom: 20px;
    font-style: italic;
    position: relative;
    z-index: 1;
    padding-left: 8px;
`;

const AuthorSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
`;

const AuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const AuthorName = styled.span`
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
`;

const AuthorRole = styled.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: ${(props) => (props.theme as Theme).color}88;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

const JumpLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.8;
    transition: all 0.2s ease;

    &:hover {
        opacity: 1;
        gap: 10px;
        color: ${(props) => (props.theme as Theme).accentColor};
    }
`;

function HomeTestimonial() {
    const { t } = useTranslation();
    const testimonials = t('resAbout:testimonials', { returnObjects: true }) as any[];
    
    // Pick the first one (Necdet) as the featured one for the Home page
    const featured = testimonials && testimonials.length > 0 ? testimonials[0] : null;

    if (!featured) return null;

    return (
        <Fade direction="up" triggerOnce delay={400}>
            <CardWrapper onClick={() => window.location.href = `/about?expand=${encodeURIComponent(featured.name)}#testimonials`}>
                <QuoteIcon>
                    <LuQuote size={40} />
                </QuoteIcon>
                <SummaryText>
                    "{featured.summaryDescription || featured.text.substring(0, 100) + '...'}"
                </SummaryText>
                <AuthorSection>
                    <AuthorInfo>
                        <AuthorName>{featured.name}</AuthorName>
                        <AuthorRole>{featured.role}</AuthorRole>
                    </AuthorInfo>
                    <JumpLink to={`/about?expand=${encodeURIComponent(featured.name)}#testimonials`}>
                        Full Review <LuArrowRight size={14} />
                    </JumpLink>
                </AuthorSection>
            </CardWrapper>
        </Fade>
    );
}

export default HomeTestimonial;
