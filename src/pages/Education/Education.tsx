// src/pages/Education/Education.tsx
import { useContext } from 'react';
import { Head } from 'vite-react-ssg';
import { ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { GraduationCap, MapPin } from 'lucide-react';
import Header from '@components/Header';
import FallbackSpinner from '@components/FallbackSpinner';
import { StyledContainer } from '@components/shared/layout';
import { EducationItem } from '@core/types/resume';
import { Theme } from '@app/theme/themes';
import * as S from './Education.styles';

interface EducationProps {
    header?: string;
}

/**
 * Education Page
 * Academic credentials and certifications.
 * Implementing a Lead-level modular architecture.
 */
function Education(props: EducationProps) {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const { header } = props;
    
    const data = {
        education: t('resEducation:education', { returnObjects: true }) as EducationItem[]
    };

    if (!data.education) return <FallbackSpinner />;

    return (
        <>
            <Head>
                <title>{header || t('layout:sections.education')} | Amin Abbasi</title>
                <meta name="description" content="Academic credentials and certifications in Software Engineering and Computer Science." />
            </Head>
            <Header title={header || t('layout:sections.education')} />
            
            <S.MainContainer>
                <StyledContainer style={{ maxWidth: '1400px', padding: '0 24px' }}>
                    <S.TimelineTrack>
                        {data.education.map((item, index) => (
                            <Fade key={`${item.cardTitle}-${index}`} direction="up" triggerOnce duration={600} delay={index * 100}>
                                <S.EntryWrapper>
                                    <S.TrackDot $accent={theme.accentColor} />
                                    <S.Card>
                                        <S.CardHeader>
                                            <S.TitleRow>
                                                <div style={{ flexShrink: 0 }}>
                                                    <GraduationCap size={18} color={theme.accentColor} style={{ opacity: 0.8 }} />
                                                </div>
                                                <S.DegreeTitle>{item.cardTitle}</S.DegreeTitle>
                                            </S.TitleRow>
                                            <S.DateBadge>{item.title}</S.DateBadge>
                                        </S.CardHeader>
                                        
                                        <S.Institution>
                                            <MapPin size={14} color={theme.accentColor} style={{ opacity: 0.7 }} />
                                            <span>{item.cardSubtitle}</span>
                                        </S.Institution>

                                        {item.bulletPoints && (
                                            <S.BulletList>
                                                {item.bulletPoints.map((point, idx) => (
                                                    <li key={idx}>
                                                        <ReactMarkdown components={{ p: 'span' }}>{point}</ReactMarkdown>
                                                    </li>
                                                ))}
                                            </S.BulletList>
                                        )}
                                        
                                        {!item.bulletPoints && item.cardDetailedText && (
                                            <div
                                                style={{
                                                    textAlign: 'start',
                                                    fontSize: '0.92rem',
                                                    color: theme.color + 'BB',
                                                    lineHeight: 1.7,
                                                }}>
                                                <ReactMarkdown>
                                                    {Array.isArray(item.cardDetailedText) ? item.cardDetailedText.join('\n\n') : item.cardDetailedText}
                                                </ReactMarkdown>
                                            </div>
                                        )}
                                    </S.Card>
                                </S.EntryWrapper>
                            </Fade>
                        ))}
                    </S.TimelineTrack>
                </StyledContainer>
            </S.MainContainer>
        </>
    );
}

export default Education;
