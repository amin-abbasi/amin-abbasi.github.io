// src/components/shared/layout/index.tsx
import React from 'react';
import * as S from './layout.styles';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export const Section: React.FC<LayoutProps> = ({ children, className, id }) => (
  <S.StyledSection className={className} id={id}>
    {children}
  </S.StyledSection>
);

export const StyledContainer: React.FC<LayoutProps> = ({ children, className, id, style }) => (
  <S.StyledContainer className={className} id={id} style={style}>
    {children}
  </S.StyledContainer>
);

export const Grid: React.FC<LayoutProps & { noGutters?: boolean }> = ({ children, className, id, noGutters }) => (
  <S.GridRow className={className} id={id} $noGutters={noGutters}>
    {children}
  </S.GridRow>
);

export const Column: React.FC<LayoutProps & { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }> = ({ 
  children, className, id, style, xs, sm, md, lg, xl 
}) => (
  <S.GridColumn 
    className={className} 
    id={id} 
    style={style}
    $xs={xs} 
    $sm={sm} 
    $md={md} 
    $lg={lg} 
    $xl={xl}
  >
    {children}
  </S.GridColumn>
);

export const SectionHeader: React.FC<LayoutProps> = ({ children, className }) => (
  <S.SectionHeader className={className}>
    {children}
  </S.SectionHeader>
);
