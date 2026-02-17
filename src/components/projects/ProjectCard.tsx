import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";
import { Theme } from "../../theme/themes";
import { Project } from "../../types/profile.types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: ${(props) => (props.theme as Theme).accentColor}40;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
`;

const ContentWrapper = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${(props) => (props.theme as Theme).color};
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.div`
  font-size: 0.88rem;
  line-height: 1.5;
  color: ${(props) => (props.theme as Theme).color}BB;
  margin-bottom: 16px;
  flex-grow: 1;

  p {
    margin: 0;
  }

  ul {
    padding-left: 18px;
    margin: 4px 0;
    list-style-type: disc;
  }

  li {
    margin-bottom: 4px;

    &::marker {
      color: ${(props) => (props.theme as Theme).accentColor};
    }
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 10px;
  background: ${(props) => (props.theme as Theme).accentColor}12;
  color: ${(props) => (props.theme as Theme).accentColor};
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}25;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;

  background: ${(props) => (props.theme as Theme).accentColor};
  color: white !important;

  &:hover {
    background: ${(props) => (props.theme as Theme).accentColor}EE;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;

  background: transparent;
  color: ${(props) => (props.theme as Theme).color} !important;
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};

  &:hover {
    background: ${(props) => (props.theme as Theme).color}10;
    border-color: ${(props) => (props.theme as Theme).color}30;
  }
`;

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <CardContainer>
      {project.image && (
        <ImageWrapper>
          <img src={project.image} alt={project.title} />
        </ImageWrapper>
      )}
      <ContentWrapper>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>
          <ReactMarkdown>
            {project.bodyText || project.description}
          </ReactMarkdown>
        </ProjectDescription>

        {project.tags && project.tags.length > 0 && (
          <TagContainer>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        )}

        <LinkContainer>
          {project.links?.map((link) =>
            link.text.toLowerCase() === "github" ? (
              <ActionButton key={link.href} href={link.href} target="_blank">
                <FaGithub size={18} />
                GitHub
              </ActionButton>
            ) : (
              <SecondaryButton key={link.href} href={link.href} target="_blank">
                <FaExternalLinkAlt size={14} />
                {link.text}
              </SecondaryButton>
            ),
          )}
          {project.source && (
            <ActionButton href={project.source} target="_blank">
              <FaGithub size={18} />
              Source
            </ActionButton>
          )}
          {project.demo && (
            <SecondaryButton href={project.demo} target="_blank">
              <FaExternalLinkAlt size={14} />
              Demo
            </SecondaryButton>
          )}
        </LinkContainer>
      </ContentWrapper>
    </CardContainer>
  );
}

export default ProjectCard;
