import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import styled, { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import endpoints from "../constants/endpoints";
import Header from "./Header";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";

const MainContainer = styled.div`
  position: relative;
`;

const EducationSection = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const EducationCard = styled.div`
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
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 12px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => (props.theme as Theme).accentColor};
`;

const DegreeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => (props.theme as Theme).color};
  letter-spacing: -0.02em;
  text-align: left;
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

const InstitutionName = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color}CC;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  li {
    position: relative;
    padding-left: 28px;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => (props.theme as Theme).color}AA;
    text-align: left;

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

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.theme as Theme).accentColor};
`;

interface EducationItem {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText?: string | string[];
  bulletPoints?: string[];
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

  useEffect(() => {
    fetch(endpoints.education, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: EducationData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <MainContainer>
          <Container fluid style={{ maxWidth: "1400px", padding: "0 20px" }}>
            {data.education.map((item, index) => (
              <Fade
                key={`${item.title}-${index}`}
                direction="up"
                triggerOnce
                duration={600}
                delay={index * 100}
              >
                <EducationSection>
                  <EducationCard>
                    <CardHeader>
                      <TitleWrapper>
                        <FaGraduationCap size={24} />
                        <DegreeTitle>{item.cardTitle}</DegreeTitle>
                      </TitleWrapper>
                      <DateText>{item.title}</DateText>
                    </CardHeader>
                    <SubtitleRow>
                      <InstitutionName>
                        <IconWrapper>
                          <FaMapMarkerAlt size={16} />
                        </IconWrapper>
                        {item.cardSubtitle}
                      </InstitutionName>
                    </SubtitleRow>
                    {item.bulletPoints && (
                      <BulletList>
                        {item.bulletPoints.map((point, idx) => (
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
                      </BulletList>
                    )}
                    {!item.bulletPoints && item.cardDetailedText && (
                      <div style={{ textAlign: "left" }}>
                        <ReactMarkdown>
                          {Array.isArray(item.cardDetailedText)
                            ? item.cardDetailedText.join("\n\n")
                            : item.cardDetailedText}
                        </ReactMarkdown>
                      </div>
                    )}
                  </EducationCard>
                </EducationSection>
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

export default Education;
