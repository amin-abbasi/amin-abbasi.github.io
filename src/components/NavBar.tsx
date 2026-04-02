import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { styled, ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import ThemeToggler from '@components/ThemeToggler';
import LanguageSwitcher from '@components/LanguageSwitcher';
import { Theme } from '@app/theme/themes';
import { NavbarData } from '@domain-types/profile.types';
import { CV_DOWNLOAD_URL } from '@constants/config';

const styles = {
    logoStyle: {
        width: 40,
        height: 40,
        objectFit: 'contain' as const,
    },
};

const StyledNavbar = styled(Navbar)<{ theme: Theme }>`
    background-color: ${(props) => props.theme.background} !important;
    border-bottom: 1px solid ${(props) => props.theme.cardBorderColor};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
`;

const ExternalNavLink = styled.a<{ theme: Theme }>`
    color: ${(props) => props.theme.navbarTheme.linkColor};
    margin-inline-start: 0.75em;
    margin-inline-end: 0.75em;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 3px solid transparent;

    &:hover {
        color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    }
    &::after {
        background-color: ${(props) => props.theme.accentColor};
    }
`;

const InternalNavLink = styled(NavLink)<{ theme: Theme }>`
    color: ${(props) => props.theme.navbarTheme.linkColor};
    margin-inline-start: 0.75em;
    margin-inline-end: 0.75em;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 3px solid transparent;

    &:hover {
        color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    }
    &::after {
        background-color: ${(props) => props.theme.accentColor};
    }
    &.active {
        color: ${(props) => props.theme.navbarTheme.linkActiveColor};
    }
`;

const CVButton = styled.a<{ theme: Theme }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0 16px;
    height: 26px;
    margin-inline-start: 0.75rem;
    margin-inline-end: 0.75rem;
    margin-bottom: 8px;
    background: ${(props) => props.theme.accentColor};
    color: #fff !important;
    border-radius: 25px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;

    &:hover {
        filter: brightness(1.12);
        transform: translateY(-1px);
    }
`;

function NavBar() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const data = {
        logo: t('resNavbar:logo', { returnObjects: true }),
        sections: t('resNavbar:sections', { returnObjects: true })
    } as NavbarData;
    const [expanded, setExpanded] = useState(false);

    return (
        <StyledNavbar fixed="top" expand="lg" variant={theme.bsPrimaryVariant} className="navbar-custom" expanded={expanded} theme={theme}>
            <Container>
                {data?.logo && (
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            src={data?.logo?.source}
                            className="d-inline-block align-top"
                            alt="main logo"
                            style={data?.logo?.height && data?.logo?.width ? { height: data?.logo?.height, width: data?.logo?.width } : styles.logoStyle}
                        />
                    </Navbar.Brand>
                )}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="align-items-center">
                        {data &&
                            data.sections?.map((section) =>
                                section?.type === 'link' ? (
                                    <ExternalNavLink
                                        key={section.title}
                                        href={section.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setExpanded(false)}
                                        className="navbar__link"
                                        theme={theme}>
                                        {section.title}
                                    </ExternalNavLink>
                                ) : (
                                    <InternalNavLink key={section.title} onClick={() => setExpanded(false)} className="navbar__link" to={section.href} end={section.href === '/'}>
                                        {section.title}
                                    </InternalNavLink>
                                ),
                            )}
                        <div className="navbar-controls d-flex align-items-center">
                            <CVButton
                                href={CV_DOWNLOAD_URL}
                                download="Amin_Abbasi_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                theme={theme}
                                onClick={() => setExpanded(false)}
                            >
                                <Download size={14} strokeWidth={2.5} />
                                {t('layout:buttons.cv')}
                            </CVButton>
                            <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                                <ThemeToggler onClick={() => setExpanded(false)} />
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style>{`
                .navbar-controls {
                    gap: 0.5rem;
                    height: 100%;
                }
                @media (max-width: 991px) {
                    .navbar-controls {
                        margin-top: 1.5rem;
                        padding-top: 1rem;
                        border-top: 1px solid ${theme.cardBorderColor}40;
                        width: 100%;
                        justify-content: center;
                        gap: 1.5rem;
                        flex-wrap: wrap;
                    }
                    .navbar__link {
                        padding: 12px 0;
                        width: 100%;
                        text-align: center;
                        border-bottom: 1px solid ${theme.cardBorderColor}20;
                    }
                }
            `}</style>
        </StyledNavbar>
    );
}

export default NavBar;
