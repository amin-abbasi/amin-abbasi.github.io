// src/pages/Admin/Admin.styles.ts
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${(props) => (props.theme as Theme).background};
`;

export const LoginCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    color: ${(props) => (props.theme as Theme).color};
    padding: 3rem;
    width: 100%;
    max-width: 450px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;

    h2 {
        font-family: var(--font-mono);
        color: ${(props) => (props.theme as Theme).accentColor};
        margin-bottom: 2rem;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.1em;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    background: transparent;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}55;
    color: ${(props) => (props.theme as Theme).color};
    margin-bottom: 1.5rem;
    padding: 12px 15px;
    border-radius: 4px;
    font-family: var(--font-mono);
    outline: none;
    transition: all 0.2s ease;
    box-sizing: border-box;

    &::placeholder {
        color: ${(props) => (props.theme as Theme).color};
        opacity: 0.4;
    }

    &:focus {
        border-color: ${(props) => (props.theme as Theme).accentColor};
        box-shadow: 0 0 0 4px ${(props) => (props.theme as Theme).accentColor}20;
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 1.5px solid ${(props) => (props.theme as Theme).accentColor};
    color: ${(props) => (props.theme as Theme).accentColor};
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => (props.theme as Theme).accentColor};
        color: #fff;
        box-shadow: 0 0 15px ${(props) => (props.theme as Theme).accentColor}44;
    }
`;

export const ErrorAlert = styled.div`
    padding: 12px 16px;
    border-radius: 4px;
    background: rgba(255, 80, 80, 0.1);
    border: 1px solid rgba(255, 80, 80, 0.3);
    color: #ff5050;
    font-size: 0.82rem;
    font-family: var(--font-mono);
    margin-bottom: 20px;
    text-align: center;
`;

