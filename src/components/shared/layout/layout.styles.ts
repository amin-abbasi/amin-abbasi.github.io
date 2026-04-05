// src/components/shared/layout/layout.styles.ts
import { styled, css } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const StyledSection = styled.section`
  padding: 4rem 0;
  background: transparent;
  color: ${(props) => (props.theme as Theme).color};
  position: relative;
  overflow: hidden;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px;

  @media (max-width: 1400px) { max-width: 1140px; }
  @media (max-width: 1200px) { max-width: 960px; }
  @media (max-width: 992px) { max-width: 720px; }
  @media (max-width: 768px) { max-width: 540px; }
  @media (max-width: 576px) { max-width: 100%; }
`;

export const GridRow = styled.div<{ $noGutters?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${(props) => (props.$noGutters ? '0' : '-1.5rem')};
  margin-left: ${(props) => (props.$noGutters ? '0' : '-1.5rem')};
`;

export const GridColumn = styled.div<{ 
  $xs?: number; 
  $sm?: number; 
  $md?: number; 
  $lg?: number; 
  $xl?: number;
  $order?: number;
  $orderSm?: number;
  $orderMd?: number;
  $orderLg?: number;
  $orderXl?: number;
}>`
  position: relative;
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
  flex: 0 0 100%;
  max-width: 100%;
  order: ${(props) => props.$order || 0};

  ${(props) => props.$sm && css`
    @media (min-width: 576px) {
      flex: 0 0 ${(props.$sm / 12) * 100}%;
      max-width: ${(props.$sm / 12) * 100}%;
      order: ${props.$orderSm !== undefined ? props.$orderSm : props.$order || 0};
    }
  `}

  ${(props) => props.$md && css`
    @media (min-width: 768px) {
      flex: 0 0 ${(props.$md / 12) * 100}%;
      max-width: ${(props.$md / 12) * 100}%;
      order: ${props.$orderMd !== undefined ? props.$orderMd : props.$orderSm !== undefined ? props.$orderSm : props.$order || 0};
    }
  `}

  ${(props) => props.$lg && css`
    @media (min-width: 992px) {
      flex: 0 0 ${(props.$lg / 12) * 100}%;
      max-width: ${(props.$lg / 12) * 100}%;
      order: ${props.$orderLg !== undefined ? props.$orderLg : props.$orderMd !== undefined ? props.$orderMd : props.$orderSm !== undefined ? props.$orderSm : props.$order || 0};
    }
  `}

  ${(props) => props.$xl && css`
    @media (min-width: 1200px) {
      flex: 0 0 ${(props.$xl / 12) * 100}%;
      max-width: ${(props.$xl / 12) * 100}%;
      order: ${props.$orderXl !== undefined ? props.$orderXl : props.$orderLg !== undefined ? props.$orderLg : props.$orderMd !== undefined ? props.$orderMd : props.$orderSm !== undefined ? props.$orderSm : props.$order || 0};
    }
  `}
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
