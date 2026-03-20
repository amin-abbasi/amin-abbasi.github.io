import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { Theme } from '../theme/themes';

const StyledDropdown = styled(NavDropdown)`
  font-family: var(--font-mono);

  .dropdown-toggle {
    color: ${(props) => (props.theme as Theme).navbarTheme.linkColor} !important;
    background: transparent;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 12px;
    height: 26px; /* Match ThemeToggler height */
    transition: all 0.3s ease;
    margin-inline-start: 1em;
    margin-inline-end: 1em;
    margin-bottom: 8px;

    &:hover {
      border-color: ${(props) => (props.theme as Theme).accentColor};
      color: ${(props) => (props.theme as Theme).accentColor} !important;
    }

    &::after {
      display: none;
    }
  }

  .dropdown-menu {
    background-color: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 8px;
    margin-top: 2px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    min-width: 120px;
    padding: 4px 0;
    /* Center/Align adjustment */
    inset-inline-end: 0 !important;
    inset-inline-start: auto !important;
  }

  .dropdown-item {
    color: ${(props) => (props.theme as Theme).color};
    font-family: var(--font-mono);
    font-size: 0.75rem;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${(props) => (props.theme as Theme).accentColor}15;
      color: ${(props) => (props.theme as Theme).accentColor};
    }

    &.active {
      background-color: ${(props) => (props.theme as Theme).accentColor};
      color: white;
    }
  }
`;

const FlagContainer = styled.span`
  font-size: 1.1rem;
`;

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', label: 'EN' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', label: 'TR' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷', label: 'FA' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <StyledDropdown
      title={
        <>
          <FlagContainer>{currentLanguage.flag}</FlagContainer>
          <span>{currentLanguage.label}</span>
        </>
      }
      id="language-nav-dropdown"
    >
      {languages.map((lang) => (
        <NavDropdown.Item
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          active={i18n.language === lang.code}
        >
          <FlagContainer>{lang.flag}</FlagContainer>
          {lang.name}
        </NavDropdown.Item>
      ))}
    </StyledDropdown>
  );
};

export default LanguageSwitcher;
