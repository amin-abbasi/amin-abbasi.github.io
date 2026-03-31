import { Fade } from 'react-awesome-reveal';
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

const StatsBarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    margin: 2rem 0;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    overflow: hidden;
`;

const StatItem = styled.div`
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

const StatValue = styled.div`
    font-family: var(--font-mono);
    font-size: 1.7rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    line-height: 1;
    margin-bottom: 4px;
`;

const StatLabel = styled.div`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => (props.theme as Theme).color}77;
`;

interface StatEntry {
    value: string;
    label: string;
}

interface StatsBarProps {
    stats: StatEntry[];
}

function StatsBar({ stats }: StatsBarProps) {
    if (!Array.isArray(stats) || stats.length === 0) return null;

    return (
        <Fade direction="up" triggerOnce delay={200}>
            <StatsBarContainer>
                {stats.map((s) => (
                    <StatItem key={s.label}>
                        <StatValue>{s.value}</StatValue>
                        <StatLabel>{s.label}</StatLabel>
                    </StatItem>
                ))}
            </StatsBarContainer>
        </Fade>
    );
}

export default StatsBar;
