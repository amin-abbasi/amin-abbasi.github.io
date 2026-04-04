// src/pages/Contact/Contact.styles.ts
import { styled, keyframes } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const MainContainer = styled.div`
    padding: 40px 0 80px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 48px;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const InfoCard = styled.div`
    padding: 32px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
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
`;

export const InfoLabel = styled.p`
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 1.5rem;
    opacity: 0.8;
`;

export const InfoTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin: 0 0 0.8rem;
    letter-spacing: -0.02em;
`;

export const InfoSubtitle = styled.p`
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${(props) => (props.theme as Theme).color}BB;
    margin-bottom: 0.5rem;
    text-align: justify;
`;

export const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    color: inherit;

    &:last-child { border-bottom: none; }
    &:hover { opacity: 0.8; }
    &:hover svg { transform: scale(1.1); }
`;

export const ContactIcon = styled.span`
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: ${(props) => (props.theme as Theme).accentColor}15;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${(props) => (props.theme as Theme).accentColor};

    svg { transition: transform 0.2s ease; }
`;

export const ContactText = styled.div`
    font-family: var(--font-mono);
    font-size: 0.78rem;

    strong {
        display: block;
        color: ${(props) => (props.theme as Theme).color};
        font-weight: 600;
        margin-bottom: 2px;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
    span {
        color: ${(props) => (props.theme as Theme).color}BB;
    }
`;

export const StatusCard = styled.div`
    margin-top: 16px;
    padding: 12px 16px;
    background: rgba(0, 230, 118, 0.07);
    border: 1px solid rgba(0, 230, 118, 0.25);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
`;

const pulseDot = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7); }
    70% { box-shadow: 0 0 0 8px rgba(0, 230, 118, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
`;

export const PulseDot = styled.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00e676;
    flex-shrink: 0;
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
    animation: ${pulseDot} 2s infinite;
`;

export const StatusText = styled.span`
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #00e676;
    font-weight: 600;
`;

export const FormCard = styled.div`
    padding: 32px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        inset-inline-end: -1px;
        width: 14px;
        height: 14px;
        border-bottom: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-end: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 0 0 6px 0;
    }
`;

export const FormLabel = styled.label`
    display: block;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 8px;
    opacity: 0.9;
    text-align: start;
`;

const sharedInputStyles = (theme: Theme) => `
    width: 100%;
    background: ${theme.background};
    border: 1px solid ${theme.cardBorderColor};
    border-radius: 4px;
    padding: 12px 14px;
    font-family: var(--font-main);
    font-size: 0.9rem;
    color: ${theme.color};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;

    &:focus {
        border-color: ${theme.accentColor}60;
        box-shadow: 0 0 0 3px ${theme.accentColor}12;
    }

    &::placeholder {
        color: ${theme.color}44;
    }
`;

export const InputField = styled.input<{ $theme: Theme }>`
    ${(props) => sharedInputStyles(props.$theme)}
`;

export const TextareaField = styled.textarea<{ $theme: Theme }>`
    ${(props) => sharedInputStyles(props.$theme)}
    resize: vertical;
    min-height: 130px;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
`;

export const SubmitButton = styled.button<{ $accent: string; $disabled?: boolean }>`
    width: 100%;
    padding: 13px 24px;
    background: ${(props) => props.$disabled ? props.$accent + '66' : props.$accent};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: ${(props) => props.$disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;

    &:hover:not(:disabled) {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }
`;

export const SuccessMessage = styled.div`
    padding: 16px 20px;
    background: rgba(0, 230, 118, 0.08);
    border: 1px solid rgba(0, 230, 118, 0.3);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #00e676;
    text-align: center;
    margin-top: 16px;
`;

export const ErrorMessage = styled.div`
    padding: 16px 20px;
    background: rgba(255, 80, 80, 0.08);
    border: 1px solid rgba(255, 80, 80, 0.3);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #ff5050;
    text-align: center;
    margin-top: 16px;
`;

export const spin = keyframes`
    to { transform: rotate(360deg); }
`;
