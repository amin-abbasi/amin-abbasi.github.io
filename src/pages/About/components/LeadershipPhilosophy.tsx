import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactMarkdown from 'react-markdown';
import * as LucideIcons from 'lucide-react';
import * as S from './LeadershipPhilosophy.styles';

interface Pillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}

interface LeadershipPhilosophyProps {
    title: string;
    pillars: Pillar[];
}

const LeadershipPhilosophy: React.FC<LeadershipPhilosophyProps> = ({ title, pillars }) => {
    if (!pillars || pillars.length === 0) return null;

    return (
        <S.PhilosophyContainer>
            <Fade direction="up" triggerOnce>
                <S.SectionTitle>{title}</S.SectionTitle>
            </Fade>
            
            <S.PillarsGrid>
                {pillars.map((pillar, index) => {
                    // Dynamically get the Lucide icon component
                    const IconComponent = (LucideIcons as any)[pillar.icon] || LucideIcons.Info;
                    
                    return (
                        <Fade key={pillar.id} direction="up" triggerOnce delay={index * 150}>
                            <S.PillarCard>
                                <div className="blueprint-pattern" />
                                <S.IconWrapper>
                                    <IconComponent />
                                </S.IconWrapper>
                                <S.PillarTitle>{pillar.title}</S.PillarTitle>
                                <S.PillarDescription as="div">
                                    <ReactMarkdown>{pillar.description}</ReactMarkdown>
                                </S.PillarDescription>
                            </S.PillarCard>
                        </Fade>
                    );
                })}
            </S.PillarsGrid>
        </S.PhilosophyContainer>
    );
};

export default LeadershipPhilosophy;
