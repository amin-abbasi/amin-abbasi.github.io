import React, { useEffect, useState, useContext } from "react";
import { Container, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styled, { ThemeContext } from "styled-components";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";

// ── Layout shell ─────────────────────────────────────────────────────────────
const MainContainer = styled.div`
  padding: 40px 0 80px;
  position: relative;
`;

// ── Vertical timeline track ───────────────────────────────────────────────────
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

// ── One experience entry ──────────────────────────────────────────────────────
const EntryWrapper = styled.div`
  position: relative;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Connector dot on the track
const TrackDot = styled.div<{ $accent: string }>`
  position: absolute;
  left: -56px;
  top: 30px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${(p) => p.$accent};
  background: ${(props) => (props.theme as Theme).background};
  box-shadow: 0 0 8px ${(p) => p.$accent}60;

  @media (max-width: 768px) {
    left: -34px;
    width: 10px;
    height: 10px;
  }
`;

// Schematic entry card
const Card = styled.div`
  padding: 28px 32px;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 6px;
  position: relative;
  transition: all 0.3s ease;

  /* Blueprint corner accents */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
  }
  &::before {
    top: -1px;
    left: -1px;
    border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-radius: 6px 0 0 0;
  }
  &::after {
    bottom: -1px;
    right: -1px;
    border-bottom: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-right: 2px solid ${(props) => (props.theme as Theme).accentColor};
    border-radius: 0 0 6px 0;
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
  margin-bottom: 4px;
`;

const JobTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
  color: ${(props) => (props.theme as Theme).color};
`;

const DateBadge = styled.span`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).accentColor};
  background: ${(props) => (props.theme as Theme).accentColor}12;
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
  padding: 4px 12px;
  border-radius: 4px;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

const SubtitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const CompanyName = styled.span`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color}AA;
  letter-spacing: 0.05em;

  &::before {
    content: "@ ";
    color: ${(props) => (props.theme as Theme).accentColor};
  }
`;

const WorkTypeBadge = styled(Badge)`
  font-family: var(--font-mono) !important;
  font-size: 0.68rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  background: transparent !important;
  color: ${(props) => (props.theme as Theme).accentColor} !important;
  border: 1px solid ${(props) => (props.theme as Theme).accentColor}35 !important;
  padding: 3px 10px !important;
  border-radius: 3px !important;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 24px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}CC;
    text-align: left;

    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: ${(props) => (props.theme as Theme).accentColor};
      font-size: 0.8em;
      top: 3px;
    }
  }
`;

// ── Transfer connector between cards ─────────────────────────────────────────
const ConnectorLabel = styled.div`
  position: absolute;
  left: -80px;
  top: 0;
  bottom: 0;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// ── Index counter ─────────────────────────────────────────────────────────────
const EntryIndex = styled.div`
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 700;
  color: ${(props) => (props.theme as Theme).accentColor};
  opacity: 0.5;
  letter-spacing: 0.1em;
`;

// ─────────────────────────────────────────────────────────────────────────────

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
    fetch(endpoints.experiences, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />

      {data ? (
        <MainContainer>
          <Container fluid style={{ maxWidth: "1400px", padding: "0 24px" }}>
            <TimelineTrack>
              {data.map((item, index) => (
                <Fade
                  key={`${item.title}-${index}`}
                  direction="up"
                  triggerOnce
                  duration={600}
                  delay={index * 80}
                >
                  <EntryWrapper>
                    <ConnectorLabel>
                      <EntryIndex>
                        {String(index + 1).padStart(2, "0")}
                      </EntryIndex>
                    </ConnectorLabel>

                    <TrackDot $accent={theme.accentColor} />

                    <Card>
                      <CardHeader>
                        <JobTitle>{item.title}</JobTitle>
                        <DateBadge>{item.dateText}</DateBadge>
                      </CardHeader>
                      <SubtitleRow>
                        <CompanyName>{item.subtitle}</CompanyName>
                        {item.workType && (
                          <WorkTypeBadge pill bg="secondary">
                            {item.workType}
                          </WorkTypeBadge>
                        )}
                      </SubtitleRow>
                      <BulletList>
                        {item.workDescription.map((point, idx) => (
                          <li key={idx}>
                            <ReactMarkdown components={{ p: "span" }}>
                              {point}
                            </ReactMarkdown>
                          </li>
                        ))}
                      </BulletList>
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

export default Experience;
