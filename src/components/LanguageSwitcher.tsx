import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { Theme } from '../theme/themes';

const StyledDropdown = styled(NavDropdown)`
  margin-inline-start: 1em;
  font-family: var(--font-mono);

  .dropdown-toggle {
    color: ${(props) => (props.theme as Theme).navbarTheme.linkColor} !important;
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    padding-inline-start: 0.75rem;
    padding-inline-end: 0.75rem;

    &:hover {
      color: ${(props) => (props.theme as Theme).navbarTheme.linkHoverColor} !important;
    }

    &::after {
      display: none; /* Hide default arrow to keep it clean */
    }
  }

  .dropdown-menu {
    background-color: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 4px;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .dropdown-item {
    color: ${(props) => (props.theme as Theme).color};
    font-family: var(--font-mono);
    font-size: 0.75rem;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${(props) => (props.theme as Theme).accentColor}20;
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
