import React, { useEffect, useState, useContext } from "react";
import { Container, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styled, { ThemeContext } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";

const MainContainer = styled.div`
  padding: 40px 0;
  position: relative;
`;

const ExperienceSection = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const ExperienceCard = styled.div`
  padding: 32px;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 20px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  width: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: ${(props) => (props.theme as Theme).accentColor}40;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 12px;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => (props.theme as Theme).color};
  letter-spacing: -0.02em;
`;

const DateText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => (props.theme as Theme).accentColor};
  background: ${(props) => (props.theme as Theme).accentColor}12;
  padding: 6px 16px;
  border-radius: 24px;
  white-space: nowrap;
`;

const SubtitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

const CompanyName = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color}CC;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 4px;
    height: 16px;
    background: ${(props) => (props.theme as Theme).accentColor};
    border-radius: 2px;
  }
`;

const WorkDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  li {
    position: relative;
    padding-left: 28px;
    font-size: 1rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}AA;
    text-align: left;
    width: 100%;

    &::before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${(props) => (props.theme as Theme).accentColor};
      font-weight: 700;
      opacity: 0.8;
    }
  }
`;

const StyledBadge = styled(Badge)`
  font-weight: 600;
  font-size: 0.75rem;
  padding: 5px 10px;
  background-color: transparent !important;
  color: ${(props) => (props.theme as Theme).accentColor} !important;
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}40;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

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
        <MainContainer>
          <Container fluid style={{ maxWidth: "1400px", padding: "0 20px" }}>
            {data.map((item, index) => (
              <Fade
                key={`${item.title}-${index}`}
                direction="up"
                triggerOnce
                duration={600}
                delay={index * 100}
              >
                <ExperienceSection>
                  <ExperienceCard>
                    <CardHeader>
                      <JobTitle>{item.title}</JobTitle>
                      <DateText>{item.dateText}</DateText>
                    </CardHeader>
                    <SubtitleRow>
                      <CompanyName>{item.subtitle}</CompanyName>
                      {item.workType && (
                        <StyledBadge pill bg="secondary">
                          {item.workType}
                        </StyledBadge>
                      )}
                    </SubtitleRow>
                    <WorkDescription>
                      {item.workDescription.map((point, idx) => (
                        <li key={idx}>
                          <ReactMarkdown
                            components={{
                              p: "span",
                            }}
                          >
                            {point}
                          </ReactMarkdown>
                        </li>
                      ))}
                    </WorkDescription>
                  </ExperienceCard>
                </ExperienceSection>
              </Fade>
            ))}
          </Container>
        </MainContainer>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Experience;
