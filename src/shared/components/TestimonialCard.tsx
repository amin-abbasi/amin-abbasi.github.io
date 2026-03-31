import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Quote, ArrowRight, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonial } from '@core/types/resume';
import { Theme } from 'src/app/theme/themes';

const Card = styled.div`
    padding: 24px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    text-align: start;

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 576px) {
        padding: 18px;
    }
`;

const QuoteIcon = styled.div`
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.2;
    position: absolute;
    top: 16px;
    left: 16px;
`;

const Content = styled.div<{ $expanded: boolean; $isFeatured: boolean }>`
    position: relative;
    max-height: ${(props) => (props.$isFeatured ? 'none' : props.$expanded ? '1000px' : '135px')};
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 12px;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: linear-gradient(to bottom, transparent, ${(props) => (props.theme as Theme).cardBackground});
        opacity: ${(props) => (props.$expanded || props.$isFeatured ? 0 : 1)};
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
`;

const Text = styled.p`
    font-family: var(--font-main);
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}EE;
    margin: 0;
    padding-left: 8px;
    font-style: italic;

    @media (max-width: 576px) {
        font-size: 0.88rem;
    }
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
`;

const Meta = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Badge = styled.div`
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

const Info = styled.div`
    font-family: var(--font-mono);
    font-size: 0.72rem;

    strong {
        display: block;
        color: ${(props) => (props.theme as Theme).color};
        font-weight: 600;
        font-size: 0.85rem;
    }
    span {
        color: ${(props) => (props.theme as Theme).color}88;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
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
    display: flex;
    align-items: center;
    gap: 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.8;
    
    &:hover { opacity: 1; }
`;

const ActionLink = styled(Link)`
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
    }
`;

const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.7;
    transition: all 0.2s ease;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
    }
`;

interface TestimonialCardProps {
    testimonial: Testimonial;
    isFeatured?: boolean;
    showLinkedIn?: boolean;
    initiallyExpanded?: boolean;
}

export const TestimonialCard = ({ 
    testimonial, 
    isFeatured = false, 
    showLinkedIn = false,
    initiallyExpanded = false 
}: TestimonialCardProps) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
    const CHAR_LIMIT_FOR_BUTTON = 180;
    
    // In featured mode, we use summaryDescription. In list mode, we use full text.
    const displayText = isFeatured 
        ? testimonial.summaryDescription || testimonial.text.substring(0, 100) + '...'
        : testimonial.text;

    const hasExpansion = !isFeatured && testimonial.text.length > CHAR_LIMIT_FOR_BUTTON;

    const handleCardClick = () => {
        if (isFeatured) {
            window.location.href = `/about?expand=${encodeURIComponent(testimonial.name)}#testimonials`;
        }
    };

    return (
        <Card 
            id={`testimonial-${testimonial.name}`} 
            onClick={isFeatured ? handleCardClick : undefined}
            style={{ cursor: isFeatured ? 'pointer' : 'default' }}
        >
            <QuoteIcon>
                <Quote size={40} />
            </QuoteIcon>
            
            <div style={{ flex: 1, position: 'relative', marginTop: '8px' }}>
                <Content $expanded={isExpanded} $isFeatured={isFeatured}>
                    <Text>
                        "{displayText}"
                    </Text>
                </Content>
                
                {hasExpansion && (
                    <ExpandButton onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                    }}>
                        {isExpanded ? (
                            <><ChevronUp size={14} /> {t('layout:about.showLess', { defaultValue: 'Show less' })}</>
                        ) : (
                            <><ChevronDown size={14} /> {t('layout:about.showMore', { defaultValue: 'Show more' })}</>
                        )}
                    </ExpandButton>
                )}
            </div>

            <Author>
                <Meta>
                    <Badge>{testimonial.initials}</Badge>
                    <Info>
                        <strong>{testimonial.name}</strong>
                        <span>{testimonial.role}</span>
                    </Info>
                </Meta>
                
                {isFeatured && (
                    <ActionLink to={`/about?expand=${encodeURIComponent(testimonial.name)}#testimonials`} onClick={(e) => e.stopPropagation()}>
                        {t('layout:home.fullReview', { defaultValue: 'Full Review' })} <ArrowRight size={14} />
                    </ActionLink>
                )}

                {showLinkedIn && testimonial.linkedinUrl && (
                    <SocialLink 
                        href={testimonial.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={t('layout:about.viewOnLinkedin', { defaultValue: 'View on LinkedIn' })}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Linkedin size={18} />
                    </SocialLink>
                )}
            </Author>
        </Card>
    );
};
