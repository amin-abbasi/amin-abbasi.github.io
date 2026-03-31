import { useState } from 'react';
import styled from 'styled-components';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        transform: translateY(-4px);
    }

    &::before {
        content: '"';
        position: absolute;
        top: 8px;
        left: 16px;
        font-size: 3rem;
        line-height: 1;
        color: ${(props) => (props.theme as Theme).accentColor};
        opacity: 0.25;
        font-family: var(--font-mono);
    }
`;

const Content = styled.div<{ $expanded: boolean }>`
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

const Text = styled.p`
    font-size: 0.88rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}CC;
    margin: 0;
    padding-left: 8px;
`;

const Author = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
    text-align: start;
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
    }
    span {
        color: ${(props) => (props.theme as Theme).color}66;
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

const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 600;
    color: ${(props) => (props.theme as Theme).accentColor};
    text-decoration: none;
    padding: 8px 12px;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    border-radius: 4px;
    background: ${(props) => (props.theme as Theme).accentColor}08;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => (props.theme as Theme).accentColor}12;
        border-color: ${(props) => (props.theme as Theme).accentColor}60;
    }
`;

interface TestimonialCardProps {
    testimonial: Testimonial;
    initiallyExpanded?: boolean;
}

export const TestimonialCard = ({ testimonial, initiallyExpanded = false }: TestimonialCardProps) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
    const CHAR_LIMIT_FOR_BUTTON = 180;
    const hasExpansion = testimonial.text.length > CHAR_LIMIT_FOR_BUTTON;

    return (
        <Card id={`testimonial-${testimonial.name}`}>
            <div style={{ flex: 1 }}>
                <Content $expanded={isExpanded}>
                    <Text>{testimonial.text}</Text>
                </Content>
                
                {hasExpansion && (
                    <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
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
                {testimonial.linkedinUrl && (
                    <SocialLink 
                        href={testimonial.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={t('layout:about.viewOnLinkedin', { defaultValue: 'View on LinkedIn' })}
                    >
                        <Linkedin size={14} />
                        {t('layout:about.viewOnLinkedin', { defaultValue: 'LinkedIn' })}
                    </SocialLink>
                )}
            </Author>
        </Card>
    );
};
