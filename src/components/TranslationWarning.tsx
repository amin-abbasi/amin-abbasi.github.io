import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, keyframes } from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const WarningContainer = styled.div`
  position: fixed;
  bottom: 20px;
  inset-inline-end: 20px;
  z-index: 9999;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 12px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: ${slideIn} 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  max-width: 320px;

  .icon {
    font-size: 1.2rem;
    color: #e67e22;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #856404;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  margin-inline-start: 10px;
  opacity: 0.5;
  &:hover { opacity: 1; }
`;

export default function TranslationWarning() {
  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleFailed = (lng: string, ns: string, msg: string) => {
      console.warn(`Translation failed to load for ${lng}/${ns}`, msg);
      // We only show warning if it's not the fallback language (EN)
      // because EN is bundled and shouldn't fail unless there's a serious issue.
      if (lng !== 'en') {
        setErrorMsg(`Language resources (${lng}) failed to load. Falling back to English.`);
        setShow(true);
      }
    };

    const handleMissing = (lngs: readonly string[], ns: string, key: string) => {
      console.warn(`Missing translation key: ${ns}:${key} for ${lngs.join(', ')}`);
      // Optional: show warning for missing keys in production
    };

    i18n.on('failedLoading', handleFailed);
    i18n.on('missingKey', handleMissing);

    return () => {
      i18n.off('failedLoading', handleFailed);
      i18n.off('missingKey', handleMissing);
    };
  }, [i18n]);

  if (!show) return null;

  return (
    <WarningContainer>
      <FaExclamationTriangle className="icon" />
      <span>{errorMsg}</span>
      <CloseButton onClick={() => setShow(false)}>&times;</CloseButton>
    </WarningContainer>
  );
}
