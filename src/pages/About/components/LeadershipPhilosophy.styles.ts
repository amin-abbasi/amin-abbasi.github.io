import { styled, css } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const PhilosophyContainer = styled.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${(props) => (props.theme as Theme).accentColor};
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--font-mono);

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, ${(props) => (props.theme as Theme).accentColor} 0%, transparent 100%);
        opacity: 0.2;
    }
`;

export const PillarsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
    }
`;

export const PillarCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardBackground};
    padding: 2.5rem 2rem;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);

    /* Corner Accents (Blueprint Style) */
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        border-color: ${(props) => (props.theme as Theme).accentColor};
        border-style: solid;
        opacity: 0.4;
        transition: all 0.3s ease;
    }

    &::before {
        top: -1px;
        left: -1px;
        border-width: 2px 0 0 2px;
    }

    &::after {
        bottom: -1px;
        right: -1px;
        border-width: 0 2px 2px 0;
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}60;
        transform: translateY(-8px);
        box-shadow: 0 20px 40px -20px ${(props) => (props.theme as Theme).accentColor}40;
        background: ${(props) => (props.theme as Theme).accentColor}08;

        &::before,
        &::after {
            opacity: 1;
            width: 20px;
            height: 20px;
        }
    }

    /* Subtle Grid Background Pattern for Card */
    .blueprint-pattern {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(${(props) => (props.theme as Theme).accentColor}10 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.3;
        z-index: 0;
        pointer-events: none;
    }
`;

export const PillarHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
`;

export const IconWrapper = styled.div`
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 4px;
    background: ${(props) => (props.theme as Theme).accentColor}1A;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}40;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.theme as Theme).accentColor};
    position: relative;

    svg {
        width: 22px;
        height: 22px;
        filter: drop-shadow(0 0 5px ${(props) => (props.theme as Theme).accentColor}40);
    }
`;

export const PillarTitle = styled.h4`
    font-family: var(--font-mono);
    font-size: 1.15rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin: 0;
    letter-spacing: -0.02em;
    text-align: start;
`;

export const PillarDescription = styled.div`
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}CC;
    margin: 0;
    position: relative;
    z-index: 1;
    text-align: start;

    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
    }
`;
