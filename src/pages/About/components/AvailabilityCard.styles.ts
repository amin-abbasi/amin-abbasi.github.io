// src/pages/About/components/AvailabilityCard.styles.ts
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const Card = styled.div`
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
    text-align: start;

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

export const PulseDot = styled.span`
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

export const AvailText = styled.div`
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.5;
    color: ${(props) => (props.theme as Theme).color}CC;

    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
        display: block;
        margin-bottom: 4px;
    }
`;
