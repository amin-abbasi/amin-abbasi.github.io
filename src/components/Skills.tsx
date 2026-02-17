import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { CSSProperties } from "react";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  } as CSSProperties,
  introTextContainer: {
    whiteSpace: "pre-wrap",
  } as CSSProperties,
};

interface SkillItem {
  title: string;
  icon: string;
}

interface SkillRow {
  title: string;
  items: SkillItem[];
}

interface SkillsData {
  intro: string;
  skills: SkillRow[];
}

interface SkillsProps {
  header: string;
}

function Skills(props: SkillsProps) {
  const { header } = props;
  const [data, setData] = useState<SkillsData | null>(null);

  useEffect(() => {
    fetch(endpoints.skills, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: SkillsData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              <h4 style={styles.introTextContainer}>
                <ReactMarkdown>{data.intro}</ReactMarkdown>
              </h4>
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: "inline-block" }}>
                      <img
                        style={styles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Skills;
