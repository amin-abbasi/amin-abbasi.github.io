import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { Theme } from '../app/theme/themes';

const ToggleButton = styled.button<{ $isTR: boolean }>`
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 25px;
  width: 62px;
  height: 26px;
  position: relative;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;
  transition: all 0.3s ease;
  margin-inline-start: 1em;
  margin-inline-end: 1em;
  overflow: hidden;

  /* Adjust for navbar centering/spacing */
  margin-bottom: 8px;

  &:hover {
    border-color: ${(props) => (props.theme as Theme).accentColor};
  }

  .knob {
    width: 32px;
    height: 20px;
    background: ${(props) => (props.theme as Theme).accentColor};
    border-radius: 15px;
    position: absolute;
    top: 2px;
    left: ${({ $isTR }) => ($isTR ? '28px' : '2px')};
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.73rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .bg-text {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: ${(props) => (props.theme as Theme).color}50;
    font-weight: 600;
    pointer-events: none;
    z-index: 1;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const isTR = currentLanguage.startsWith('tr');

  const toggleLanguage = () => {
    const nextLng = isTR ? 'en' : 'tr';
    i18n.changeLanguage(nextLng);
  };

  return (
    <ToggleButton $isTR={isTR} onClick={toggleLanguage} aria-label="Toggle language">
      <div className="bg-text">
        <span>EN</span>
        <span>TR</span>
      </div>
      <div className="knob">{isTR ? 'TR' : 'EN'}</div>
    </ToggleButton>
  );
};

export default LanguageSwitcher;
