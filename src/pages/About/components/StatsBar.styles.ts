// src/pages/About/components/StatsBar.styles.ts
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const StatsBarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin: 2rem 0;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    overflow: hidden;
`;

export const StatItem = styled.div`
    flex: 1;
    min-width: 120px;
    text-align: center;
    padding: 16px 12px;
    border-right: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    position: relative;

    &:last-child {
        border-right: none;
    }
`;

export const StatValue = styled.div`
    font-family: var(--font-mono);
    font-size: 1.7rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    line-height: 1;
    margin-bottom: 4px;
`;

export const StatLabel = styled.div`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => (props.theme as Theme).color}77;
`;
