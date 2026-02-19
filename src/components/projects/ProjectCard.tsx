import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Theme } from "../../theme/themes";
import { Project } from "../../types/profile.types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ── Container ─────────────────────────────────────────────────────────────────
const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  /* Blueprint corner accents */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 2;
    transition: all 0.3s ease;
  }
  &::before {
    top: -1px;
    left: -1px;
    border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-radius: 6px 0 0 0;
    opacity: 0.5;
  }
  &::after {
    bottom: -1px;
    right: -1px;
    border-bottom: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-right: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-radius: 0 0 6px 0;
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => (props.theme as Theme).accentColor}40;
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
`;

// ── "Case study" header strip ─────────────────────────────────────────────────
const CaseStudyHeader = styled.div`
  padding: 16px 20px 14px;
  border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  background: ${(props) => (props.theme as Theme).cardBackground};
`;

const CaseLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => (props.theme as Theme).accentColor};
  opacity: 0.7;
`;

const WindowDots = styled.div`
  display: flex;
  gap: 5px;
  span {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.2;
  }
`;

// ── Image ─────────────────────────────────────────────────────────────────────
const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: saturate(0.8);
  }
  ${CardContainer}:hover & img {
    transform: scale(1.04);
    filter: saturate(1);
  }
`;

// ── Body ──────────────────────────────────────────────────────────────────────
const ContentWrapper = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: -0.02em;
  color: ${(props) => (props.theme as Theme).color};
`;

const ProjectDescription = styled.div`
  font-size: 0.86rem;
  line-height: 1.6;
  color: ${(props) => (props.theme as Theme).color}BB;
  margin-bottom: 14px;
  flex-grow: 1;

  p {
    margin: 0;
  }
  ul {
    padding-left: 16px;
    margin: 4px 0;
    list-style-type: none;
  }
  li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 4px;
    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      font-size: 0.7em;
      color: ${(props) => (props.theme as Theme).accentColor};
      top: 2px;
    }
  }
`;

// ── Tags ──────────────────────────────────────────────────────────────────────
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 18px;
`;

const Tag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 3px;
  background: ${(props) => (props.theme as Theme).accentColor}10;
  color: ${(props) => (props.theme as Theme).accentColor};
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}20;
`;

// ── Links ─────────────────────────────────────────────────────────────────────
const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;
  letter-spacing: 0.04em;
  background: ${(props) => (props.theme as Theme).accentColor};
  color: #fff !important;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;
  letter-spacing: 0.04em;
  background: transparent;
  color: ${(props) => (props.theme as Theme).color} !important;
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};

  &:hover {
    border-color: ${(props) => (props.theme as Theme).accentColor}50;
    background: ${(props) => (props.theme as Theme).accentColor}08;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <CardContainer>
      {/* Mini "case study" header strip */}
      <CaseStudyHeader>
        <CaseLabel>{project.title}</CaseLabel>
        <WindowDots>
          <span /> <span /> <span />
        </WindowDots>
      </CaseStudyHeader>

      {project.image && (
        <ImageWrapper>
          <img src={project.image} alt={project.title} />
        </ImageWrapper>
      )}

      <ContentWrapper>
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
                <FaGithub size={14} />
                GitHub
              </ActionButton>
            ) : (
              <SecondaryButton key={link.href} href={link.href} target="_blank">
                <FaExternalLinkAlt size={12} />
                {link.text}
              </SecondaryButton>
            ),
          )}
          {project.source && (
            <ActionButton href={project.source} target="_blank">
              <FaGithub size={14} />
              Source
            </ActionButton>
          )}
          {project.demo && (
            <SecondaryButton href={project.demo} target="_blank">
              <FaExternalLinkAlt size={12} />
              Demo
            </SecondaryButton>
          )}
        </LinkContainer>
      </ContentWrapper>
    </CardContainer>
  );
}

export default ProjectCard;
