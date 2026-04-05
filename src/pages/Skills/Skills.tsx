// src/pages/Skills/Skills.tsx
import { Head } from 'vite-react-ssg';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Header from '@components/Header';
import FallbackSpinner from '@components/FallbackSpinner';
import { StyledContainer } from '@components/shared/layout';
import { SkillsData, TechNode, SkillGroup, SoftSkillCategory } from '@core/types/resume';
import SkillGraph from './components/SkillGraph';
import * as S from './Skills.styles';

interface SkillsProps {
    header?: string;
}

/**
 * Skills Page
 * Interactive node-graph and professional soft skills.
 * Implementing a high-fidelity, lead-level modular architecture.
 */
function Skills(props: SkillsProps) {
    const { t } = useTranslation();
    const { header } = props;

    const data: SkillsData = {
        intro: t('resSkills:intro'),
        techs: (t('resSkills:techs', { returnObjects: true }) || []) as unknown as TechNode[],
        groups: (t('resSkills:groups', { returnObjects: true }) || []) as unknown as SkillGroup[],
        softSkills: (t('resSkills:softSkills', { returnObjects: true }) || []) as unknown as SoftSkillCategory[]
    };

    if (!data.techs || !data.groups) return <FallbackSpinner />;

    return (
        <>
            <Head>
                <title>{header || t('layout:sections.skills')} | Amin Abbasi</title>
                <meta name="description" content="Technical skill set including Node.js, Distributed Systems, and Pipeline Architecture." />
            </Head>
            <Header title={header || t('layout:sections.skills')} />
            
            <S.MainContainer>
                <StyledContainer style={{ maxWidth: '1200px', padding: '0 24px' }}>
                    <Fade direction="up" triggerOnce duration={800}>
                        <S.IntroTextWrapper>
                            <S.IntroLine>{data.intro}</S.IntroLine>
                        </S.IntroTextWrapper>
                    </Fade>

                    <Fade direction="up" triggerOnce delay={200}>
                        <SkillGraph techs={data.techs} groups={data.groups} />
                    </Fade>

                    <S.SoftSkillsSection>
                        <Fade direction="up" triggerOnce delay={400}>
                            <S.SoftSkillsTitle>
                                {t('layout:sections.softSkills', { defaultValue: 'Leadership & Soft Skills' })}
                            </S.SoftSkillsTitle>
                        </Fade>
                        <S.SoftSkillsGrid>
                            {data.softSkills.map((category, idx) => (
                                <Fade key={category.title} direction="up" triggerOnce delay={500 + idx * 100}>
                                    <S.SoftSkillCard>
                                        <S.SoftCategoryTitle>{category.title}</S.SoftCategoryTitle>
                                        <S.SoftItemList>
                                            {category.items.map((item, i) => (
                                                <S.SoftItem key={i}>{item}</S.SoftItem>
                                            ))}
                                        </S.SoftItemList>
                                    </S.SoftSkillCard>
                                </Fade>
                            ))}
                        </S.SoftSkillsGrid>
                    </S.SoftSkillsSection>
                </StyledContainer>
            </S.MainContainer>
        </>
    );
}

export default Skills;
