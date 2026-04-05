// src/pages/CaseStudies/CaseStudies.styles.ts
import { styled, keyframes } from 'styled-components';
import { ChevronUp } from 'lucide-react';
import { Theme } from '@app/theme/themes';

export const ChevronUpStyled = styled(ChevronUp)`
    transition: transform 0.3s ease;
`;

export const MainContainer = styled.div`
    padding: 40px 0 80px;
`;

export const IntroBlock = styled.div`
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

export const CaseCard = styled.div`
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

export const CaseHeader = styled.div`
    padding: 24px 32px;
    padding-inline-end: 72px; /* Ensure space for the absolute icon */
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    display: flex;
    align-items: center;
    position: relative;
    gap: 16px;
    cursor: pointer;
    user-select: none;
`;

export const CaseMeta = styled.div`
    flex: 1;
`;

export const CaseLabel = styled.p`
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

export const CaseTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.35rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin: 0 0 6px;
    letter-spacing: -0.02em;
    text-align: start;
`;

export const CaseSubtitle = styled.p`
    font-size: 0.88rem;
    color: ${(props) => (props.theme as Theme).color}88;
    margin: 0;
    text-align: start;
`;

export const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
`;

export const Tag = styled.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 4px;
    background: ${(props) => (props.theme as Theme).accentColor}0D;
    color: ${(props) => (props.theme as Theme).accentColor};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}20;
    margin-bottom: 4px;
`;

export const ExpandIcon = styled.span<{ $open: boolean }>`
    position: absolute;
    top: 24px;
    right: 24px;
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

    @media (max-width: 768px) {
        top: 20px;
        right: 16px;
        width: 26px;
        height: 26px;
    }
`;

export const CaseBodyWrapper = styled.div<{ $open: boolean }>`
    display: grid;
    grid-template-rows: ${props => props.$open ? '1fr' : '0fr'};
    transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${(props) => (props.theme as Theme).cardBackground};
    overflow: hidden;
    min-height: 0;
`;

export const CaseBody = styled.div`
    overflow: hidden;
    min-height: 0;
    padding: 0 32px 32px;
`;

export const Section = styled.div`
    margin-top: 1px;
    &:first-child { margin-top: 32px; }
`;

export const SectionTitle = styled.h4`
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

export const SectionText = styled.div`
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

export const BulletList = styled.ul`
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

export const MetricsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
`;

export const MetricPill = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 18px;
    background: ${(props) => (props.theme as Theme).accentColor}0D;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}25;
    border-radius: 6px;
    text-align: start;
    min-width: 100px;
`;

export const MetricValue = styled.span`
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    line-height: 1;
    margin-bottom: 4px;
`;

export const MetricLabel = styled.span`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => (props.theme as Theme).color}66;
`;

export const Divider = styled.hr`
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    margin: 16px 0;
`;

/* Terminal Preview Styles */

export const TerminalContainer = styled.div<{ $floating?: boolean; $x?: number; $y?: number }>`
    background: ${(props) => (props.theme as Theme).background === '#0d1117' ? '#161b22' : '#f6f8fa'};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    width: 320px;
    z-index: 2000;
    overflow: hidden;
    pointer-events: none;
    font-family: var(--font-mono);
    
    ${props => props.$floating ? `
        position: fixed;
        left: ${props.$x}px;
        top: ${props.$y}px;
        transform: translate(20px, 20px);
    ` : `
        position: relative;
        width: 100%;
        margin-top: 16px;
        box-shadow: none;
    `}
`;

export const TerminalHeader = styled.div`
    background: ${(props) => (props.theme as Theme).background === '#0d1117' ? '#21262d' : '#ebf0f4'};
    padding: 8px 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
`;

export const TerminalDots = styled.div`
    display: flex;
    gap: 6px;
    margin-right: 12px;
    
    span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        &:nth-child(1) { background: #ff5f56; }
        &:nth-child(2) { background: #ffbd2e; }
        &:nth-child(3) { background: #27c93f; }
    }
`;

export const TerminalTitle = styled.div`
    font-size: 0.65rem;
    color: ${(props) => (props.theme as Theme).color}88;
    text-transform: lowercase;
    letter-spacing: 0.05em;
`;

export const TerminalBody = styled.div`
    padding: 14px;
    min-height: 120px;
    background: ${(props) => (props.theme as Theme).background === '#0d1117' ? '#0d1117' : '#ffffff'};
    text-align: left;
    
    * {
        font-size: 11px !important; /* Force small code-like font */
        font-family: var(--font-mono) !important;
        line-height: 1.5 !important;
        white-space: pre-wrap; /* Preserve indentation spaces */
    }
    
    .Typewriter__cursor {
        color: ${(props) => (props.theme as Theme).accentColor};
    }
`;

export const TerminalLine = styled.div`
    display: flex;
    gap: 6px;
    align-items: flex-start;
    justify-content: flex-start; /* Ensure left alignment */
    
    &::before {
        content: '>';
        color: ${(props) => (props.theme as Theme).accentColor};
        opacity: 0.7;
        flex-shrink: 0;
        margin-top: 1px;
    }

    .Typewriter {
        width: 100%;
        text-align: left;
    }
`;

export const StaticTerminalBlock = styled.div`
    margin-top: 12px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}20;
    background: ${(props) => (props.theme as Theme).accentColor}05;
`;

export const TerminalStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    font-size: 0.6rem;
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.8;
    
    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${(props) => (props.theme as Theme).accentColor};
        box-shadow: 0 0 8px ${(props) => (props.theme as Theme).accentColor};
    }
`;

