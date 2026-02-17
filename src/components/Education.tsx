import React, { useEffect, useState, useContext } from "react";
import { Chrono } from "react-chrono";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "styled-components";
import endpoints from "../constants/endpoints";
import Header from "./Header";
import FallbackSpinner from "./FallbackSpinner";
import "../css/education.css";
import { Theme } from "../theme/themes";

interface EducationIcon {
  src: string;
  alt: string;
}

interface EducationItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string | string[];
  icon?: EducationIcon;
}

interface EducationData {
  education: EducationItem[];
}

interface EducationProps {
  header: string;
}

function Education(props: EducationProps) {
  const theme = useContext(ThemeContext) as Theme;
  const { header } = props;
  const [data, setData] = useState<EducationData | null>(null);
  const [width, setWidth] = useState("50vw");
  const [mode, setMode] = useState<"VERTICAL" | "VERTICAL_ALTERNATING">(
    "VERTICAL_ALTERNATING",
  );

  useEffect(() => {
    fetch(endpoints.education, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: EducationData) => setData(res))
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
        <Fade>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Chrono
                allowDynamicUpdate
                useReadMore={false}
                items={data.education}
                cardHeight={250}
                mode={
                  mode === "VERTICAL_ALTERNATING"
                    ? "VERTICAL_ALTERNATING"
                    : "VERTICAL"
                }
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                <div className="chrono-icons">
                  {data.education.map((education, index) =>
                    education.icon ? (
                      <img
                        key={education.icon.src + index}
                        src={education.icon.src}
                        alt={education.icon.alt}
                      />
                    ) : null,
                  )}
                </div>
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Education;
