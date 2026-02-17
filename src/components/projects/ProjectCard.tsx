import React, { useContext } from "react";
import { Button, Card, Badge, Col } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";
import { Theme } from "../../theme/themes";
import { Project } from "../../types/profile.types";
import { CSSProperties } from "react";

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  } as CSSProperties,
  cardStyle: {
    borderRadius: 10,
  } as CSSProperties,
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  } as CSSProperties,
  cardTextStyle: {
    textAlign: "left",
  } as CSSProperties,
  linkStyle: {
    textDecoration: "none",
    padding: 10,
  } as CSSProperties,
  buttonStyle: {
    margin: 5,
  } as CSSProperties,
};

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const theme = useContext(ThemeContext) as Theme;
  const { project } = props;

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
        text={theme.bsSecondaryVariant as any}
      >
        <Card.Img variant="top" src={project?.image} />
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={"outline-" + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, "_blank")}
            >
              {link.text}
            </Button>
          ))}
          {project.source && (
            <Button
              style={styles.buttonStyle}
              variant={"outline-" + theme.bsSecondaryVariant}
              onClick={() => window.open(project.source, "_blank")}
            >
              Source
            </Button>
          )}
          {project.demo && (
            <Button
              style={styles.buttonStyle}
              variant={"outline-" + theme.bsSecondaryVariant}
              onClick={() => window.open(project.demo, "_blank")}
            >
              Demo
            </Button>
          )}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
}

export default ProjectCard;
