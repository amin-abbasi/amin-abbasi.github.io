import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NotFoundWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    text-align: center;
    padding: 2rem;
`;

const GlitchTitle = styled.h1`
    font-size: clamp(5rem, 15vw, 10rem);
    font-weight: 700;
    font-family: var(--font-mono);
    color: ${(props) => props.theme.accentColor};
    margin: 0;
    line-height: 1;
    position: relative;
    text-shadow: 0 0 20px ${(props) => props.theme.accentColor}33;

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

const MessageWrapper = styled.div`
    max-width: 600px;
    margin-top: 1rem;
    padding: 2rem;
    background: ${(props) => props.theme.cardBackground};
    border: 1px solid ${(props) => props.theme.cardBorderColor};
    border-radius: var(--border-radius);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 20px;
        right: 20px;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${(props) => props.theme.accentColor}, transparent);
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-family: var(--font-mono);
    color: ${(props) => props.theme.accentColor};
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

const Subtitle = styled.p`
    color: ${(props) => props.theme.color};
    opacity: 0.8;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    padding: 0.8rem 2rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.accentColor};
    font-family: var(--font-mono);
    text-decoration: none;
    transition: all var(--transition-fast);
    letter-spacing: 0.05em;

    &:hover {
        background: ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.background};
        box-shadow: 0 0 20px ${(props) => props.theme.accentColor}44;
        transform: translateY(-2px);
    }
`;

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <NotFoundWrapper>
            <GlitchTitle>404</GlitchTitle>
            <MessageWrapper className="blueprint-border">
                <Title>{t('layout:notFound.title', { defaultValue: '404 — ROUTE_NOT_FOUND' })}</Title>
                <Subtitle>
                    {t('layout:notFound.subtitle', { 
                        defaultValue: 'The requested component or path does not exist in the current build.' 
                    })}
                </Subtitle>
                <StyledLink to="/">
                    {t('layout:notFound.backHome', { defaultValue: 'SYSTEM.REBOOT (Go Home)' })}
                </StyledLink>
            </MessageWrapper>
        </NotFoundWrapper>
    );
}
