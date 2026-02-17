import React, { useEffect, useState, useContext } from "react";
// @ts-ignore
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { ThemeContext } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import "../css/experience.css";
import { Theme } from "../theme/themes";
import { CSSProperties } from "react";

const styles = {
  ulStyle: {
    listStylePosition: "outside",
    paddingLeft: 20,
    marginBottom: 0,
  } as CSSProperties,
  subtitleContainerStyle: {
    marginTop: 5,
    marginBottom: 5,
  } as CSSProperties,
  subtitleStyle: {
    display: "inline-block",
  } as CSSProperties,
  inlineChild: {
    display: "inline-block",
  } as CSSProperties,
  itemStyle: {
    marginBottom: 10,
  } as CSSProperties,
  liStyle: {
    marginBottom: -15,
  } as CSSProperties,
};

interface ExperienceItem {
  title: string;
  subtitle: string;
  dateText: string;
  workType?: string;
  workDescription: string[];
}

interface ExperienceProps {
  header: string;
}

function Experience(props: ExperienceProps) {
  const theme = useContext(ThemeContext) as Theme;
  const { header } = props;
  const [data, setData] = useState<ExperienceItem[] | null>(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />

      {data ? (
        <div className="section-content-container">
          <Container>
            <Timeline lineColor={theme.timelineLineColor}>
              {data.map((item, index) => (
                <Fade key={item.title + item.dateText + index}>
                  <TimelineItem
                    dateText={item.dateText}
                    dateInnerStyle={{ background: theme.accentColor }}
                    style={styles.itemStyle}
                    bodyContainerStyle={{ color: theme.color }}
                  >
                    <h2 className="item-title">{item.title}</h2>
                    <div style={styles.subtitleContainerStyle}>
                      <h4
                        style={{
                          ...styles.subtitleStyle,
                          color: theme.accentColor,
                        }}
                      >
                        {item.subtitle}
                      </h4>
                      {item.workType && (
                        <h5 style={styles.inlineChild}>
                          &nbsp;· {item.workType}
                        </h5>
                      )}
                    </div>
                    <ul style={styles.ulStyle}>
                      {item.workDescription.map((point) => (
                        <div key={point}>
                          <li style={styles.liStyle}>
                            <ReactMarkdown
                              components={{
                                p: "span",
                              }}
                            >
                              {point}
                            </ReactMarkdown>
                          </li>
                          <br />
                        </div>
                      ))}
                    </ul>
                  </TimelineItem>
                </Fade>
              ))}
            </Timeline>
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Experience;
