import { useState } from 'react';
import { styled, css } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import { Theme } from '../app/theme/themes';

const MainContainer = styled.div`
    padding: 40px 0 80px;
    position: relative;
`;

const IntroTextWrapper = styled.div`
    max-width: 800px;
    text-align: start;
    margin-bottom: 36px;
    border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
    padding-inline-start: 24px;
`;

const IntroLine = styled.div`
    font-family: var(--font-main);
    font-size: 1.05rem;
    line-height: 1.8;
    color: ${(props) => (props.theme as Theme).color}DD;
    font-weight: 400;
    margin-bottom: 8px;
`;

const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CategoryCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 4px;
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    /* Blueprint corner markers */
    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: 10px;
        height: 10px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
        opacity: 0.5;
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
    &:hover::before {
        opacity: 1;
    }
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    padding-bottom: 12px;
`;

const CategoryTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
    color: ${(props) => (props.theme as Theme).color};
`;

const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const SkillBadge = styled.div<{ isCore?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: ${(props) => (props.isCore 
        ? `${(props.theme as Theme).accentColor}18` 
        : `${(props.theme as Theme).accentColor}08`)};
    border: 1px solid ${(props) => (props.isCore 
        ? '#00f2ff' 
        : `${(props.theme as Theme).accentColor}15`)};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;

    ${(props) => props.isCore && css`
        box-shadow: 0 0 12px rgba(0, 242, 255, 0.25), inset 0 0 4px rgba(0, 242, 255, 0.1);
        
        /* Vibrant glassmorphic lamp indicator */
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #00f2ff;
            box-shadow: 0 0 10px #00f2ff, 0 0 20px #00f2ff;
            opacity: 0.9;
        }

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0, 242, 255, 0.05), transparent);
            border-radius: 2px;
            pointer-events: none;
        }
    `}

    &:hover {
        background: ${(props) => (props.isCore 
            ? 'rgba(0, 242, 255, 0.15)' 
            : `${(props.theme as Theme).accentColor}12`)};
        border-color: ${(props) => (props.isCore 
            ? '#00f2ff' 
            : `${(props.theme as Theme).accentColor}50`)};
        transform: translateY(-2px) scale(1.05);
        box-shadow: ${(props) => (props.isCore 
            ? '0 8px 25px rgba(0, 242, 255, 0.4)' 
            : '0 4px 12px rgba(0, 0, 0, 0.05)')};
        z-index: 10;
    }
`;

const SkillIcon = styled.img`
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: grayscale(0.2) opacity(0.8);
`;

const SkillName = styled.span`
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 500;
    color: ${(props) => (props.theme as Theme).color}EE;
`;

const ModuleID = styled.div`
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.4;
    margin-inline-start: auto;
`;

// ── Filter System ─────────────────────────────────────────────────────────────
const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
`;

const FilterButton = styled.button<{ $active: boolean }>`
    background: ${(props) => (props.$active ? `${(props.theme as Theme).accentColor}15` : 'transparent')};
    border: 1px solid ${(props) => (props.$active ? (props.theme as Theme).accentColor : `${(props.theme as Theme).cardBorderColor}`)};
    color: ${(props) => (props.$active ? (props.theme as Theme).accentColor : `${(props.theme as Theme).color}88`)};
    padding: 6px 16px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor};
        color: ${(props) => (props.theme as Theme).accentColor};
    }
`;

interface SkillItem {
    title: string;
    icon: string;
    isCore?: boolean;
}

interface SkillRow {
    title: string;
    items: SkillItem[];
}

interface SkillsData {
    intro: string;
    skills: SkillRow[];
}

interface SkillsProps {
    header?: string;
}

function Skills(props: SkillsProps) {
    const { t } = useTranslation();
    const { header } = props;
    const [filter, setFilter] = useState('ALL');

    const data = {
        intro: t('resSkills:intro'),
        skills: t('resSkills:skills', { returnObjects: true })
    } as SkillsData;

    const categories = ['ALL', 'CORE', ...new Set((data.skills || []).map(s => s.title.split(' ')[0].toUpperCase()))];

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
            <Header title={header || t('layout:sections.skills')} />
            {data ? (
                <MainContainer>
                    <Container fluid style={{ maxWidth: '1200px', padding: '0 24px' }}>
                        <Fade direction="up" triggerOnce duration={800}>
                            <IntroTextWrapper>
                                {(() => {
                                    const parts = data.intro.split('. ');
                                    const firstLine = parts[0] + '.';
                                    const secondLine = parts.slice(1).join('. ');
                                    return (
                                        <>
                                            <IntroLine>{firstLine}</IntroLine>
                                            {secondLine && <IntroLine>{secondLine}</IntroLine>}
                                        </>
                                    );
                                })()}
                            </IntroTextWrapper>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={200}>
                            <FilterContainer>
                                {categories.map(cat => (
                                    <FilterButton 
                                        key={cat} 
                                        $active={filter === cat}
                                        onClick={() => setFilter(cat)}
                                    >
                                        {cat}
                                    </FilterButton>
                                ))}
                            </FilterContainer>
                        </Fade>

                        <CategoryGrid>
                            {filteredSkills?.map((category, idx) => {
                                // Sort core skills to the top
                                const sortedItems = [...category.items].sort((a, b) => {
                                    if (a.isCore && !b.isCore) return -1;
                                    if (!a.isCore && b.isCore) return 1;
                                    return 0;
                                });

                                return (
                                    <Fade key={category.title} direction="up" triggerOnce duration={600} delay={idx * 50}>
                                        <CategoryCard>
                                            <CategoryHeader>
                                                <CategoryTitle>{category.title}</CategoryTitle>
                                                <ModuleID>MOD_{String(idx + 1).padStart(2, '0')}</ModuleID>
                                            </CategoryHeader>
                                            <SkillList>
                                                {sortedItems.map((item) => (
                                                    <SkillBadge key={item.title} isCore={item.isCore}>
                                                        {item.icon && <SkillIcon src={item.icon} alt={item.title} />}
                                                        <SkillName>{item.title}</SkillName>
                                                    </SkillBadge>
                                                ))}
                                            </SkillList>
                                        </CategoryCard>
                                    </Fade>
                                );
                            })}
                        </CategoryGrid>
                    </Container>
                </MainContainer>
            ) : (
                <FallbackSpinner />
            )}
        </>
    );
}

export default Skills;
