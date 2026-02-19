import React, { useEffect, useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";

const MainContainer = styled.div`
  padding: 40px 0 80px;
  position: relative;
`;

const IntroTextWrapper = styled.div`
  max-width: 800px;
  text-align: left;
  margin-bottom: 56px;
  border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
  padding-left: 24px;
`;

const IntroLine = styled.div`
  font-family: var(--font-main);
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${(props) => (props.theme as Theme).color}DD;
  font-weight: 400;
  margin-bottom: 8px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 4px;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  /* Blueprint corner markers */
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.5;
  }

  &:hover {
    border-color: ${(props) => (props.theme as Theme).accentColor}40;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  &:hover::before {
    opacity: 1;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  padding-bottom: 12px;
`;

const CategoryTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  color: ${(props) => (props.theme as Theme).color};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: ${(props) => (props.theme as Theme).accentColor}08;
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}15;
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.theme as Theme).accentColor}12;
    border-color: ${(props) => (props.theme as Theme).accentColor}50;
    transform: scale(1.02);
  }
`;

const SkillIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: grayscale(0.2) opacity(0.8);
`;

const SkillName = styled.span`
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color}EE;
`;

const ModuleID = styled.div`
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: ${(props) => (props.theme as Theme).accentColor};
  opacity: 0.4;
  margin-left: auto;
`;

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
  const theme = useContext(ThemeContext) as Theme;

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
        <MainContainer>
          <Container fluid style={{ maxWidth: "1200px", padding: "0 24px" }}>
            <Fade direction="up" triggerOnce duration={800}>
              <IntroTextWrapper>
                {(() => {
                  const parts = data.intro.split(". ");
                  const firstLine = parts[0] + ".";
                  const secondLine = parts.slice(1).join(". ");
                  return (
                    <>
                      <IntroLine>{firstLine}</IntroLine>
                      {secondLine && <IntroLine>{secondLine}</IntroLine>}
                    </>
                  );
                })()}
              </IntroTextWrapper>
            </Fade>

            <CategoryGrid>
              {data.skills?.map((category, idx) => (
                <Fade
                  key={category.title}
                  direction="up"
                  triggerOnce
                  duration={600}
                  delay={idx * 100}
                >
                  <CategoryCard>
                    <CategoryHeader>
                      <CategoryTitle>{category.title}</CategoryTitle>
                      <ModuleID>
                        MOD_{String(idx + 1).padStart(2, "0")}
                      </ModuleID>
                    </CategoryHeader>
                    <SkillList>
                      {category.items.map((item) => (
                        <SkillBadge key={item.title}>
                          <SkillIcon src={item.icon} alt={item.title} />
                          <SkillName>{item.title}</SkillName>
                        </SkillBadge>
                      ))}
                    </SkillList>
                  </CategoryCard>
                </Fade>
              ))}
            </CategoryGrid>
          </Container>
        </MainContainer>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Skills;
