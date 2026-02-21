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
  padding: 40px 0 80px;
  position: relative;
`;

// ── Shared schematic timeline styles ──────────────────────────────────────────
const TimelineTrack = styled.div`
  position: relative;
  padding-left: 80px;

  @media (max-width: 768px) {
    padding-left: 48px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 28px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${(props) => (props.theme as Theme).timelineLineColor};
    @media (max-width: 768px) {
      left: 18px;
    }
  }
`;

const EntryWrapper = styled.div`
  position: relative;
  margin-bottom: 80px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TrackDot = styled.div<{ $accent: string }>`
  position: absolute;
  left: -56px;
  top: 30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${(p) => p.$accent};
  background: ${(props) => (props.theme as Theme).background};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px ${(p) => p.$accent}40;

  &::after {
    content: "";
    width: 4px;
    height: 4px;
    background: ${(p) => p.$accent};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    left: -36px;
    width: 12px;
    height: 12px;
  }
`;

const Card = styled.div`
  padding: 28px 32px;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;

  /* Blueprint accents */
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 12px;
    height: 12px;
    border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
  }

  &:hover {
    border-color: ${(props) => (props.theme as Theme).accentColor}40;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DegreeTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => (props.theme as Theme).color};
  letter-spacing: -0.01em;
`;

const DateBadge = styled.span`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: ${(props) => (props.theme as Theme).accentColor};
  background: ${(props) => (props.theme as Theme).accentColor}08;
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}25;
  padding: 4px 12px;
  border-radius: 2px;
  letter-spacing: 0.05em;
`;

const Institution = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color}AA;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 0.92rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}BB;
    text-align: left;

    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${(props) => (props.theme as Theme).accentColor};
      font-size: 0.8em;
    }
  }
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
          <Container fluid style={{ maxWidth: "1400px", padding: "0 24px" }}>
            <TimelineTrack>
              {data.education.map((item, index) => (
                <Fade
                  key={`${item.title}-${index}`}
                  direction="up"
                  triggerOnce
                  duration={600}
                  delay={index * 100}
                >
                  <EntryWrapper>
                    <TrackDot $accent={theme.accentColor} />
                    <Card>
                      <CardHeader>
                        <TitleRow>
                          <div style={{ flexShrink: 0 }}>
                            <FaGraduationCap
                              size={18}
                              color={theme.accentColor}
                              style={{ opacity: 0.8 }}
                            />
                          </div>
                          <DegreeTitle>{item.cardTitle}</DegreeTitle>
                        </TitleRow>
                        <DateBadge>{item.title}</DateBadge>
                      </CardHeader>
                      <Institution>
                        <FaMapMarkerAlt
                          size={14}
                          color={theme.accentColor}
                          style={{ opacity: 0.7 }}
                        />
                        <span>{item.cardSubtitle}</span>
                      </Institution>
                      {item.bulletPoints && (
                        <BulletList>
                          {item.bulletPoints.map((point, idx) => (
                            <li key={idx}>
                              <ReactMarkdown components={{ p: "span" }}>
                                {point}
                              </ReactMarkdown>
                            </li>
                          ))}
                        </BulletList>
                      )}
                      {!item.bulletPoints && item.cardDetailedText && (
                        <div
                          style={{
                            textAlign: "left",
                            fontSize: "0.92rem",
                            color: theme.color + "BB",
                            lineHeight: 1.7,
                          }}
                        >
                          <ReactMarkdown>
                            {Array.isArray(item.cardDetailedText)
                              ? item.cardDetailedText.join("\n\n")
                              : item.cardDetailedText}
                          </ReactMarkdown>
                        </div>
                      )}
                    </Card>
                  </EntryWrapper>
                </Fade>
              ))}
            </TimelineTrack>
          </Container>
        </MainContainer>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

export default Education;
