import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { ChevronUp } from 'lucide-react';
import Header from '../../components/Header';
import FallbackSpinner from '../../components/FallbackSpinner';
import { StyledContainer } from '@shared/components/layout';
import { ExperienceItem } from '@core/types/resume';
import { Theme } from '@app/theme/themes';
import * as S from './Experience.styles';

interface ExperienceProps {
    header?: string;
}

const Experience = ({ header }: ExperienceProps) => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const data = t('resExperiences:experiences', { returnObjects: true }) as ExperienceItem[];

    if (!data) return <FallbackSpinner />;

    return (
        <>
            <Header title={header || t('layout:sections.experience')} />
            <S.TimelineSection>
                <StyledContainer>
                    <S.TimelineTrack>
                        {data.map((item, index) => (
                            <Fade 
                                key={`${item.title}-${index}`} 
                                direction="up" 
                                triggerOnce 
                                duration={600} 
                                delay={index * 80}
                            >
                                <S.EntryWrapper>
                                    <S.EntryIndex>
                                        {String(index + 1).padStart(2, '0')}
                                    </S.EntryIndex>

                                    <S.TrackDot $accent={theme.accentColor} />

                                    {item.promotionNote && (
                                        <S.PromotionBanner>
                                            <S.PromotionPill>
                                                <ChevronUp size={12} strokeWidth={2.5} />
                                                {item.promotionNote}
                                            </S.PromotionPill>
                                        </S.PromotionBanner>
                                    )}

                                    <S.Card>
                                        <S.CardHeader>
                                            <S.JobTitle>{item.title}</S.JobTitle>
                                            <S.DateBadge>{item.dateText}</S.DateBadge>
                                        </S.CardHeader>
                                        
                                        <S.SubtitleRow>
                                            <S.CompanyName>{item.subtitle}</S.CompanyName>
                                            {item.workType && (
                                                <span className="badge rounded-pill border border-primary-subtle text-primary bg-transparent py-1 px-2" style={{ fontSize: '0.64rem', fontFamily: 'var(--font-mono)' }}>
                                                    {item.workType}
                                                </span>
                                            )}
                                        </S.SubtitleRow>

                                        <S.BulletList>
                                            {item.workDescription.map((point, idx) => (
                                                <li key={idx}>
                                                    <ReactMarkdown components={{ p: 'span' }}>
                                                        {point}
                                                    </ReactMarkdown>
                                                </li>
                                            ))}
                                        </S.BulletList>

                                        {item.techStack && item.techStack.length > 0 && (
                                            <S.TechStackRow>
                                                {item.techStack.map((tech) => (
                                                    <S.TechTag key={tech}>{tech}</S.TechTag>
                                                ))}
                                            </S.TechStackRow>
                                        )}
                                    </S.Card>
                                </S.EntryWrapper>
                            </Fade>
                        ))}
                    </S.TimelineTrack>
                </StyledContainer>
            </S.TimelineSection>
        </>
    );
};

export default Experience;
