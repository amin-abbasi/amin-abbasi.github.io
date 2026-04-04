// src/pages/NotFound/NotFound.tsx
import { useTranslation } from 'react-i18next';
import * as S from './NotFound.styles';

/**
 * NotFound Page (404)
 * Custom fallback for non-existent routes.
 * Part of the Architectural Hardening initiative.
 */
export default function NotFound() {
    const { t } = useTranslation();

    return (
        <S.NotFoundWrapper>
            <S.GlitchTitle>404</S.GlitchTitle>
            <S.MessageWrapper className="blueprint-border">
                <S.Title>{t('layout:notFound.title', { defaultValue: '404 — ROUTE_NOT_FOUND' })}</S.Title>
                <S.Subtitle>
                    {t('layout:notFound.subtitle', { 
                        defaultValue: 'The requested component or path does not exist in the current build.' 
                    })}
                </S.Subtitle>
                <S.StyledLink to="/">
                    {t('layout:notFound.backHome', { defaultValue: 'SYSTEM.REBOOT (Go Home)' })}
                </S.StyledLink>
            </S.MessageWrapper>
        </S.NotFoundWrapper>
    );
}

