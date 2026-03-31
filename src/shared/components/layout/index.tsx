import { Container, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

/**
 * Architected Layout Components
 * These wrap React-Bootstrap to provide a standardized, theme-aware Design System.
 */

export const Section = styled.section`
  padding: 4rem 0;
  background: ${(props) => (props.theme as Theme).background};
  color: ${(props) => (props.theme as Theme).color};
  position: relative;
  overflow: hidden;
`;

export const StyledContainer = styled(Container)`
  max-width: 1320px; /* Standardize max-width */
  padding: 0 1.5rem;
`;

export const Grid = styled(Row)`
  --bs-gutter-x: 2rem;
  --bs-gutter-y: 2rem;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));

  & > * {
    margin-top: var(--bs-gutter-y);
  }
`;

export const Column = styled(Col)`
  position: relative;
`;

export const SectionHeader = styled.div`
  margin-bottom: 3rem;
  text-align: start;

  h2 {
    font-family: var(--font-mono);
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    letter-spacing: -0.02em;
    margin: 0;
  }
`;
