import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';
import { Section } from '@components/shared/layout';

export const AboutSection = styled(Section)`
    padding-bottom: 6rem;
`;

export const TextColumnContent = styled.div`
    font-size: 1.05em;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    z-index: 10;
    text-align: start;

    @media (min-width: 992px) {
        padding-inline-end: 4rem;
    }

    h3 {
        font-family: var(--font-mono);
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        color: ${(props) => (props.theme as Theme).accentColor};
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        margin-bottom: 0.5rem;
        color: ${(props) => (props.theme as Theme).color}DD;
    }

    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

export const ImageContainer = styled.div`
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

export const ProfileImage = styled.img`
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

export const QuoteText = styled.div`
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.88rem;
    font-style: italic;
    color: ${(props) => (props.theme as Theme).color}BB;
    text-align: center;
    position: relative;
    padding: 0 14px;
    line-height: 1.4;

    &::before,
    &::after {
        content: '"';
        color: ${(props) => (props.theme as Theme).accentColor}80;
        font-size: 1.5rem;
        position: absolute;
        top: -10px;
    }
    &::before { left: 0; }
    &::after { right: 0; }
`;

export const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1rem;
    
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const TestimonialsLabel = styled.p`
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 0.2rem;
    opacity: 0.8;
    text-align: start;
`;
