// src/pages/CaseStudies/CaseStudies.tsx
import { useState, useContext, useEffect, useCallback } from 'react';
import { Head } from 'vite-react-ssg';
import { ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import Header from '@components/Header';
import { StyledContainer } from '@components/shared/layout';
import { Theme } from '@app/theme/themes';
import { CaseStudy } from '@core/types/resume';
import DiagramViewer from './components/DiagramViewer';
import TerminalPreview from './components/TerminalPreview';
import * as S from './CaseStudies.styles';

interface CaseStudiesProps {
    header?: string;
}

/**
 * CaseStudies Page
 * Deep technical dives into architectural challenges and solutions.
 * Fully component-based and strictly typed.
 */
export default function CaseStudies(props: CaseStudiesProps) {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const { header } = props;
    
    const introText = t('resCaseStudies:intro', { defaultValue: '' });
    const studies = (t('resCaseStudies:studies', { returnObjects: true }) as CaseStudy[]) || [];
    
    // Initial state: open the first case study
    const initialOpenId = studies.length > 0 ? studies[0].id : '';
    const [openIds, setOpenIds] = useState<string[]>(initialOpenId ? [initialOpenId] : []);
    const [isMobile, setIsMobile] = useState(false);
    const [preview, setPreview] = useState<{ id: string | null; x: number; y: number }>({ id: null, x: 0, y: 0 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggle = (id: string) => {
        setOpenIds((prev) => 
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const handleMouseMove = useCallback((e: React.MouseEvent, id: string) => {
        if (!isMobile) {
            setPreview({ id, x: e.clientX, y: e.clientY });
        }
    }, [isMobile]);

    return (
        <>
            <Head>
                <title>{header || t('layout:sections.caseStudies', { defaultValue: 'Case Studies' })} | Amin Abbasi</title>
                <meta name="description" content="Deep technical dives into architectural challenges and solutions in Fintech and HealthTech." />
            </Head>
            <Header title={header || t('layout:sections.caseStudies', { defaultValue: 'Case Studies' })} />
            
            <S.MainContainer>
                <StyledContainer style={{ maxWidth: '1100px', padding: '0 24px' }}>
                    <Fade direction="up" triggerOnce duration={700}>
                        <S.IntroBlock style={{ whiteSpace: 'pre-line' }}>
                            {introText}
                        </S.IntroBlock>
                    </Fade>

                    {!isMobile && preview.id && (
                        <TerminalPreview 
                            visible={true}
                            snippet={studies.find(s => s.id === preview.id)?.previewSnippet || ''}
                            x={preview.x}
                            y={preview.y}
                            floating={true}
                        />
                    )}

                    {studies.map((cs, i) => {
                        const isOpen = openIds.includes(cs.id);
                        return (
                            <Fade key={cs.id} direction="up" triggerOnce duration={600} delay={i * 100}>
                                <S.CaseCard
                                    onMouseEnter={(e) => !isMobile && setPreview({ id: cs.id, x: e.clientX, y: e.clientY })}
                                    onMouseMove={(e) => handleMouseMove(e, cs.id)}
                                    onMouseLeave={() => !isMobile && setPreview({ id: null, x: 0, y: 0 })}
                                >
                                    <S.CaseHeader onClick={() => toggle(cs.id)}>
                                        <S.CaseMeta>
                                            <S.CaseLabel>{cs.label}</S.CaseLabel>
                                            <S.CaseTitle>{cs.title}</S.CaseTitle>
                                            <S.CaseSubtitle>{cs.subtitle}</S.CaseSubtitle>
                                            <S.TagRow>
                                                {cs.tags.map((tag) => <S.Tag key={tag}>{tag}</S.Tag>)}
                                            </S.TagRow>

                                            {isMobile && cs.previewSnippet && (
                                                <S.StaticTerminalBlock>
                                                    <TerminalPreview 
                                                        visible={true} 
                                                        snippet={cs.previewSnippet} 
                                                        floating={false} 
                                                    />
                                                    <div style={{ padding: '0 16px 12px' }}>
                                                        <S.TerminalStatus>
                                                            {t('layout:caseStudies.terminal.status', { defaultValue: 'Ready' })}
                                                        </S.TerminalStatus>
                                                    </div>
                                                </S.StaticTerminalBlock>
                                            )}
                                        </S.CaseMeta>
                                        <S.ExpandIcon $open={isOpen}>
                                            <S.ChevronUpStyled size={14} strokeWidth={2.5} />
                                        </S.ExpandIcon>
                                    </S.CaseHeader>

                                    <S.CaseBodyWrapper $open={isOpen}>
                                        <S.CaseBody>
                                            {Boolean(cs.diagram) && (
                                                <S.Section>
                                                    <DiagramViewer code={cs.diagram!} id={cs.id} />
                                                </S.Section>
                                            )}

                                            <S.Section>
                                                <S.SectionTitle>{t('layout:caseStudies.problem')}</S.SectionTitle>
                                                <S.SectionText>
                                                    <ReactMarkdown>{cs.problem}</ReactMarkdown>
                                                </S.SectionText>
                                            </S.Section>

                                            <S.Divider />

                                            <S.Section>
                                                <S.SectionTitle>{t('layout:caseStudies.approach')}</S.SectionTitle>
                                                <S.BulletList>
                                                    {cs.approach.map((point, idx) => (
                                                        <li key={idx}>
                                                            <ReactMarkdown>{point}</ReactMarkdown>
                                                        </li>
                                                    ))}
                                                </S.BulletList>
                                            </S.Section>

                                            <S.Divider />

                                            <S.Section>
                                                <S.SectionTitle>{t('layout:caseStudies.decisions')}</S.SectionTitle>
                                                {cs.decisions.map((d, idx) => (
                                                    <div key={idx} style={{ 
                                                        marginBottom: idx < cs.decisions.length - 1 ? 12 : 0,
                                                        textAlign: 'start',
                                                        lineHeight: 1.6
                                                    }}>
                                                        <span style={{
                                                            fontFamily: 'var(--font-mono)',
                                                            fontSize: '0.88rem',
                                                            fontWeight: 700,
                                                            color: theme.accentColor,
                                                            marginInlineEnd: '8px'
                                                        }}>◆ {d.title}:</span>
                                                        <span style={{ fontSize: '0.88rem', color: theme.color + 'BB' }}>{d.rationale}</span>
                                                    </div>
                                                ))}
                                            </S.Section>

                                            <S.Divider />

                                            <S.Section>
                                                <S.SectionTitle>{t('layout:caseStudies.metrics')}</S.SectionTitle>
                                                <S.MetricsRow>
                                                    {cs.metrics.map((m) => (
                                                        <S.MetricPill key={m.label}>
                                                            <S.MetricValue>{m.value}</S.MetricValue>
                                                            <S.MetricLabel>{m.label}</S.MetricLabel>
                                                        </S.MetricPill>
                                                    ))}
                                                </S.MetricsRow>
                                            </S.Section>

                                            <S.Divider />

                                            <S.Section>
                                                <S.SectionTitle>{t('layout:caseStudies.outcome')}</S.SectionTitle>
                                                <S.SectionText>
                                                    <ReactMarkdown>{cs.outcome}</ReactMarkdown>
                                                </S.SectionText>
                                            </S.Section>
                                        </S.CaseBody>
                                    </S.CaseBodyWrapper>
                                </S.CaseCard>
                            </Fade>
                        );
                    })}
                </StyledContainer>
            </S.MainContainer>
        </>
    );
}
