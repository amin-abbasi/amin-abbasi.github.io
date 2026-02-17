import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled, { ThemeContext } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import ProjectCard from "./projects/ProjectCard";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";
import { Project } from "../types/profile.types";

const MainContainer = styled.div`
  position: relative;
  padding: 40px 0;
`;

const SectionContent = styled.div`
  width: 100%;
`;

const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const StyledButton = styled(Button)`
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.2s ease;
  background: ${(props) => (props.theme as Theme).accentColor};
  border: none;

  &:hover {
    background: ${(props) => (props.theme as Theme).accentColor}EE;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px ${(props) => (props.theme as Theme).accentColor}40;
  }
`;

interface ProjectsData {
  projects: Project[];
}

interface ProjectsProps {
  header: string;
}

function Projects(props: ProjectsProps) {
  const theme = useContext(ThemeContext) as Theme;
  const { header } = props;
  const [data, setData] = useState<ProjectsData | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.projects, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: ProjectsData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  const numberOfItems = showMore && data ? data.projects.length : 6;

  return (
    <>
      <Header title={header} />
      {data ? (
        <MainContainer>
          <Container fluid style={{ maxWidth: "1400px", padding: "0 20px" }}>
            <SectionContent>
              <Row xs={1} md={2} lg={3} className="g-5">
                {data.projects
                  ?.slice(0, numberOfItems)
                  .map((project, index) => (
                    <Col key={project.title}>
                      <Fade
                        direction="up"
                        triggerOnce
                        duration={600}
                        delay={index * 100}
                        style={{ height: "100%" }}
                      >
                        <ProjectCard project={project} />
                      </Fade>
                    </Col>
                  ))}
              </Row>

              {!showMore && data.projects.length > 6 && (
                <ShowMoreWrapper>
                  <StyledButton onClick={() => setShowMore(true)}>
                    Load More Projects
                  </StyledButton>
                </ShowMoreWrapper>
              )}
            </SectionContent>
          </Container>
        </MainContainer>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Projects;
