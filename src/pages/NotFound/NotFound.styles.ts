// src/pages/NotFound/NotFound.styles.ts
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Theme } from '@app/theme/themes';

export const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    text-align: center;
    padding: 2rem;
`;

export const GlitchTitle = styled.h1`
    font-size: clamp(5rem, 15vw, 10rem);
    font-weight: 700;
    font-family: var(--font-mono);
    color: ${(props) => (props.theme as Theme).accentColor};
    margin: 0;
    line-height: 1;
    position: relative;
    text-shadow: 0 0 20px ${(props) => (props.theme as Theme).accentColor}33;

    &::after {
        content: '404';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: -1;
        filter: blur(10px);
    }
`;

export const MessageWrapper = styled.div`
    max-width: 600px;
    margin-top: 1rem;
    padding: 2rem;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: var(--border-radius);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 20px;
        right: 20px;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${(props) => (props.theme as Theme).accentColor}, transparent);
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-family: var(--font-mono);
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

export const Subtitle = styled.p`
    color: ${(props) => (props.theme as Theme).color};
    opacity: 0.8;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    padding: 0.8rem 2rem;
    background: transparent;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor};
    color: ${(props) => (props.theme as Theme).accentColor};
    font-family: var(--font-mono);
    text-decoration: none;
    transition: all var(--transition-fast);
    letter-spacing: 0.05em;

    &:hover {
        background: ${(props) => (props.theme as Theme).accentColor};
        color: ${(props) => (props.theme as Theme).background};
        box-shadow: 0 0 20px ${(props) => (props.theme as Theme).accentColor}44;
        transform: translateY(-2px);
    }
`;
