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
  padding: 40px 0;
  position: relative;
`;

const IntroText = styled.h4`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => (props.theme as Theme).color}CC;
  margin-bottom: 48px;
  max-width: 800px;
  text-align: left;
  font-weight: 400;

  p {
    margin: 0;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 20px;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    border-color: ${(props) => (props.theme as Theme).accentColor}40;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${(props) => (props.theme as Theme).accentColor};
  text-align: left;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: ${(props) => (props.theme as Theme).color}08;
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.theme as Theme).color}12;
    transform: translateY(-2px);
    border-color: ${(props) => (props.theme as Theme).accentColor}60;
  }
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color}EE;
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
          <Container fluid style={{ maxWidth: "1400px", padding: "0 20px" }}>
            <Fade direction="up" triggerOnce duration={800}>
              <IntroText>
                <ReactMarkdown>{data.intro}</ReactMarkdown>
              </IntroText>
            </Fade>

            <CategoryGrid>
              {data.skills?.map((category, idx) => (
                <Fade
                  key={category.title}
                  direction="up"
                  triggerOnce
                  duration={600}
                  delay={idx * 150}
                >
                  <CategoryCard>
                    <CategoryTitle>{category.title}</CategoryTitle>
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
