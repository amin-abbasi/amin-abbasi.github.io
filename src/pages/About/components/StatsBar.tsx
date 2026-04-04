import { Fade } from 'react-awesome-reveal';
import { StatEntry } from '@core/types/resume';
import * as S from './StatsBar.styles';

interface StatsBarProps {
    stats: StatEntry[];
}

function StatsBar({ stats }: StatsBarProps) {
    if (!Array.isArray(stats) || stats.length === 0) return null;

    return (
        <Fade direction="up" triggerOnce delay={200}>
            <S.StatsBarContainer>
                {stats.map((s) => (
                    <S.StatItem key={s.label}>
                        <S.StatValue>{s.value}</S.StatValue>
                        <S.StatLabel>{s.label}</S.StatLabel>
                    </S.StatItem>
                ))}
            </S.StatsBarContainer>
        </Fade>
    );
}

export default StatsBar;
