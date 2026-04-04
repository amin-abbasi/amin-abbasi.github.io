// src/components/NavBar.tsx
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggler from '@components/ThemeToggler';
import LanguageSwitcher from '@components/LanguageSwitcher';
import { Theme } from '@app/theme/themes';
import { NavbarData } from '@domain-types/profile.types';
import { CV_DOWNLOAD_URL } from '@constants/config';
import * as S from './NavBar.styles';

/**
 * NavBar Component
 * Modular, theme-aware navigation system.
 * Part of the Architectural Hardening initiative.
 */
function NavBar() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const [expanded, setExpanded] = useState(false);

    const data = {
        logo: t('resNavbar:logo', { returnObjects: true }),
        sections: t('resNavbar:sections', { returnObjects: true })
    } as NavbarData;

    return (
        <S.StyledNavbar $expanded={expanded}>
            <S.NavContainer>
                {data?.logo && (
                    <S.Brand to="/" onClick={() => setExpanded(false)}>
                        <img
                            src={data?.logo?.source}
                            alt="main logo"
                            style={{ 
                                height: data?.logo?.height || 40, 
                                width: data?.logo?.width || 40 
                            }}
                        />
                    </S.Brand>
                )}

                <S.Toggle onClick={() => setExpanded(!expanded)} aria-label="Toggle navigation">
                    {expanded ? <X size={24} color={theme.color} /> : <Menu size={24} color={theme.color} />}
                </S.Toggle>

                <S.Collapse $expanded={expanded}>
                    <S.NavItems>
                        {data?.sections?.map((section) =>
                            section?.type === 'link' ? (
                                <S.ExternalNavLink
                                    key={section.title}
                                    href={section.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setExpanded(false)}
                                >
                                    {section.title}
                                </S.ExternalNavLink>
                            ) : (
                                <S.InternalNavLink 
                                    key={section.title} 
                                    to={section.href} 
                                    end={section.href === '/'}
                                    onClick={() => setExpanded(false)}
                                >
                                    {section.title}
                                </S.InternalNavLink>
                            ),
                        )}
                        
                        <S.Controls>
                            <S.CVButton
                                href={CV_DOWNLOAD_URL}
                                download="Amin_Abbasi_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setExpanded(false)}
                            >
                                <Download size={14} strokeWidth={2.5} />
                                {t('layout:buttons.cv')}
                            </S.CVButton>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <ThemeToggler onClick={() => setExpanded(false)} />
                                <LanguageSwitcher />
                            </div>
                        </S.Controls>
                    </S.NavItems>
                </S.Collapse>
            </S.NavContainer>
        </S.StyledNavbar>
    );
}

export default NavBar;
