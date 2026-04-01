import React, { useEffect, useRef, useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Theme } from '@app/theme/themes';

const DiagramContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 24px;
  background: ${props => (props.theme as Theme).cardSecondaryBackground};
  border: 1px solid ${props => (props.theme as Theme).cardBorderColor};
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  /* Architectural Accents */
  &::after {
    content: 'TECHNICAL_SPEC_V2.0';
    position: absolute;
    top: 8px;
    right: 12px;
    font-family: var(--font-mono);
    font-size: 0.55rem;
    color: ${props => (props.theme as Theme).accentColor}66;
    letter-spacing: 0.1em;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid ${props => (props.theme as Theme).accentColor};
    border-right: 2px solid ${props => (props.theme as Theme).accentColor};
    opacity: 0.4;
  }
`;

const MermaidWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  
  svg {
    max-width: 100% !important;
    height: auto !important;
  }
`;

interface DiagramViewerProps {
  code: string;
  id: string;
}

declare global {
  interface Window {
    mermaid: any;
  }
}

const DiagramViewer: React.FC<DiagramViewerProps> = ({ code, id }) => {
  const theme = useContext(ThemeContext) as Theme;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isDark = theme.bsPrimaryVariant === 'dark';

  useEffect(() => {
    // Load Mermaid from CDN if not present
    if (!window.mermaid) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
      script.async = true;
      script.onload = () => {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'default',
          securityLevel: 'loose',
          fontFamily: 'var(--font-mono)',
          themeVariables: {
            primaryColor: theme.accentColor,
            primaryTextColor: theme.color,
            primaryBorderColor: theme.accentColor,
            lineColor: theme.accentColor,
            secondaryColor: theme.cardBackground,
            tertiaryColor: theme.cardSecondaryBackground,
          }
        });
        setIsLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      window.mermaid.initialize({
        theme: isDark ? 'dark' : 'default',
        themeVariables: {
          primaryColor: theme.accentColor,
          primaryTextColor: theme.color,
          primaryBorderColor: theme.accentColor,
          lineColor: theme.accentColor,
        }
      });
      setIsLoaded(true);
    }
  }, [isDark, theme]);

  useEffect(() => {
    const renderDiagram = async () => {
      if (isLoaded && containerRef.current && window.mermaid) {
        try {
          // Clear current content
          containerRef.current.innerHTML = '';
          const { svg } = await window.mermaid.render(`mermaid-${id}`, code);
          containerRef.current.innerHTML = svg;
        } catch (err) {
          console.error('Mermaid render error:', err);
          containerRef.current.innerHTML = '<p style="color: red; font-size: 0.8rem;">Diagram Rendering Error</p>';
        }
      }
    };

    renderDiagram();
  }, [code, isLoaded, id, isDark]);

  return (
    <DiagramContainer>
      <MermaidWrap ref={containerRef} id={`wrap-${id}`}>
        {!isLoaded && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', opacity: 0.5 }}>L O A D I N G _ D I A G R A M . . .</span>}
      </MermaidWrap>
    </DiagramContainer>
  );
};

export default DiagramViewer;
