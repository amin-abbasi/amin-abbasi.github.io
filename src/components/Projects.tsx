import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import ProjectCard from "./projects/ProjectCard";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";
import { CSSProperties } from "react";
import { Project } from "../types/profile.types";

const styles = {
  containerStyle: {
    marginBottom: 25,
  } as CSSProperties,
  showMoreStyle: {
    margin: 25,
  } as CSSProperties,
};

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
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              {data.projects?.slice(0, numberOfItems).map((project) => (
                <Fade key={project.title}>
                  <ProjectCard project={project} />
                </Fade>
              ))}
            </Row>

            {!showMore && data.projects.length > 6 && (
              <Button
                style={styles.showMoreStyle}
                variant={theme.bsSecondaryVariant}
                onClick={() => setShowMore(true)}
              >
                show more
              </Button>
            )}
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Projects;
