// src/pages/Projects/Projects.tsx
import { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import Header from '@components/Header';
import ProjectCard from './components/ProjectCard';
import FallbackSpinner from '@components/FallbackSpinner';
import { StyledContainer, Grid, Column } from '@components/shared/layout';
import { Project } from '@core/types/resume';
import * as S from './Projects.styles';

interface ProjectsData {
    projects: Project[];
}

interface ProjectsProps {
    header?: string;
}

/**
 * Projects Page
 * Showcases the engineer's case studies and high-scale systems.
 * Fully component-based and strictly typed.
 */
function Projects(props: ProjectsProps) {
    const { t } = useTranslation();
    const { header } = props;
    
    const data: ProjectsData = {
        projects: t('resProjects:projects', { returnObjects: true }) as Project[]
    };
    
    const [showMore, setShowMore] = useState(false);
    const numberOfItems = showMore && data.projects ? data.projects.length : 6;

    if (!data.projects) return <FallbackSpinner />;

    return (
        <>
            <Head>
                <title>{header || t('layout:sections.projects')} | Amin Abbasi</title>
                <meta name="description" content="Showcasing high-scale distributed systems and backend architecture projects." />
            </Head>
            <Header title={header || t('layout:sections.projects')} />
            
            <S.MainContainer>
                <StyledContainer style={{ padding: '0 20px' }}>
                    <S.SectionContent>
                        <Grid noGutters={false}>
                            {data.projects.slice(0, numberOfItems).map((project, index) => (
                                <Column key={project.id || index} lg={4} md={6} xs={12}>
                                    <Fade direction="up" triggerOnce duration={600} delay={index * 100} style={{ height: '100%' }}>
                                        <ProjectCard project={project} />
                                    </Fade>
                                </Column>
                            ))}
                        </Grid>

                        {!showMore && data.projects.length > 6 && (
                            <S.ShowMoreWrapper>
                                <S.StyledButton onClick={() => setShowMore(true)}>
                                    {t('layout:projects.loadMore', { defaultValue: 'Load More Projects' })}
                                </S.StyledButton>
                            </S.ShowMoreWrapper>
                        )}
                    </S.SectionContent>
                </StyledContainer>
            </S.MainContainer>
        </>
    );
}

export default Projects;
