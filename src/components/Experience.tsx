import React, { useEffect, useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { ThemeContext } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import "../css/experience.css";
import { Theme } from "../theme/themes";

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
  const [width, setWidth] = useState("50vw");
  const [mode, setMode] = useState<"VERTICAL" | "VERTICAL_ALTERNATING">(
    "VERTICAL_ALTERNATING",
  );

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => console.error(err));

    const handleResize = () => {
      if (window?.innerWidth < 576) {
        setMode("VERTICAL");
        setWidth("90vw");
      } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
        setWidth("90vw");
        setMode("VERTICAL_ALTERNATING");
      } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
        setWidth("75vw");
        setMode("VERTICAL_ALTERNATING");
      } else {
        setWidth("50vw");
        setMode("VERTICAL_ALTERNATING");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header title={header} />

      {data ? (
        <div className="section-content-container">
          <Container>
            <div style={{ width }}>
              <Chrono
                allowDynamicUpdate
                useReadMore={false}
                items={data.map((item) => ({
                  title: item.dateText,
                  cardTitle: item.title,
                  cardDetailedText: item.workDescription,
                }))}
                mode={
                  mode === "VERTICAL_ALTERNATING" ? "alternating" : "vertical"
                }
                layout={{ cardHeight: 250 }}
                display={{ toolbar: { enabled: false } }}
                interaction={{ pointClick: false }}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                {data.map((item) => (
                  <div key={item.title + item.dateText}>
                    <h4
                      style={{
                        color: theme.accentColor,
                        marginTop: 0,
                        marginBottom: 10,
                      }}
                    >
                      {item.subtitle}
                    </h4>
                    <ul style={{ listStylePosition: "outside" }}>
                      {item.workDescription.map((point) => (
                        <li key={point}>
                          <ReactMarkdown
                            components={{
                              p: "span",
                            }}
                          >
                            {point}
                          </ReactMarkdown>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Chrono>
            </div>
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Experience;
