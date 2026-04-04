// src/pages/Skills/Skills.tsx
import { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Header from '@components/Header';
import FallbackSpinner from '@components/FallbackSpinner';
import { StyledContainer } from '@components/shared/layout';
import { SkillsData, SkillCategory } from '@core/types/resume';
import * as S from './Skills.styles';

interface SkillsProps {
    header?: string;
}

/**
 * Skills Page
 * Categorized technical expertise with 'Core' highlights.
 * Implementing a Lead-level modular architecture.
 */
function Skills(props: SkillsProps) {
    const { t } = useTranslation();
    const { header } = props;
    const [filter, setFilter] = useState('ALL');

    const data: SkillsData = {
        intro: t('resSkills:intro'),
        skills: t('resSkills:skills', { returnObjects: true }) as SkillCategory[]
    };

    if (!data.skills) return <FallbackSpinner />;

    // Generate dynamic categories from data
    const categories = ['ALL', 'CORE', ...new Set((data.skills || []).map(s => s.title.split(' ')[0].toUpperCase()))];

    // Filtering logic
    const filteredSkills = (data.skills || []).filter(category => {
        if (filter === 'ALL') return true;
        if (filter === 'CORE') return category.items.some(item => item.isCore);
        return category.title.toUpperCase().startsWith(filter);
    }).map(category => {
        if (filter === 'CORE') {
            return {
                ...category,
                items: category.items.filter(item => item.isCore)
            };
        }
        return category;
    });

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
                            {(() => {
                                if (!data.intro) return null;
                                const parts = data.intro.split('. ');
                                const firstLine = parts[0] + (parts[0].endsWith('.') ? '' : '.');
                                const secondLine = parts.slice(1).join('. ');
                                return (
                                    <>
                                        <S.IntroLine>{firstLine}</S.IntroLine>
                                        {secondLine && <S.IntroLine>{secondLine}</S.IntroLine>}
                                    </>
                                );
                            })()}
                        </S.IntroTextWrapper>
                    </Fade>

                    <Fade direction="up" triggerOnce delay={200}>
                        <S.FilterContainer>
                            {categories.map(cat => (
                                <S.FilterButton 
                                    key={cat} 
                                    $active={filter === cat}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </S.FilterButton>
                            ))}
                        </S.FilterContainer>
                    </Fade>

                    <S.CategoryGrid>
                        {filteredSkills.map((category, idx) => {
                            // Sort core skills to the top
                            const sortedItems = [...category.items].sort((a, b) => {
                                if (a.isCore && !b.isCore) return -1;
                                if (!a.isCore && b.isCore) return 1;
                                return 0;
                            });

                            return (
                                <Fade key={category.title} direction="up" triggerOnce duration={600} delay={idx * 50}>
                                    <S.CategoryCard>
                                        <S.CategoryHeader>
                                            <S.CategoryTitle>{category.title}</S.CategoryTitle>
                                            <S.ModuleID>MOD_{String(idx + 1).padStart(2, '0')}</S.ModuleID>
                                        </S.CategoryHeader>
                                        <S.SkillList>
                                            {sortedItems.map((item) => (
                                                <S.SkillBadge key={item.title} $isCore={item.isCore}>
                                                    {item.icon && <S.SkillIcon src={item.icon} alt={item.title} />}
                                                    <S.SkillName>{item.title}</S.SkillName>
                                                </S.SkillBadge>
                                            ))}
                                        </S.SkillList>
                                    </S.CategoryCard>
                                </Fade>
                            );
                        })}
                    </S.CategoryGrid>
                </StyledContainer>
            </S.MainContainer>
        </>
    );
}

export default Skills;
