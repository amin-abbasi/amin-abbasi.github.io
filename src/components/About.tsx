import React, { useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import styled, { ThemeContext } from "styled-components";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";

const AboutContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const TextCol = styled(Col)`
  flex-direction: column;
  text-align: left;
  font-size: 1.05em;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media (min-width: 992px) {
    padding-right: 4rem;
  }

  h3 {
    font-family: var(--font-mono);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${(props) => (props.theme as Theme).accentColor};
    font-size: 1.5rem;
    letter-spacing: -0.02em;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${(props) => (props.theme as Theme).color}DD;
  }

  strong {
    color: ${(props) => (props.theme as Theme).accentColor};
    font-weight: 600;
  }
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  z-index: 1;
`;

const ImageFrame = styled.div`
  position: relative;
  padding: 10px;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  border-radius: 4px;

  /* Corner accents */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid ${(props) => (props.theme as Theme).accentColor};
  }
  &::before {
    top: -2px;
    left: -2px;
    border-right: 0;
    border-bottom: 0;
  }
  &::after {
    bottom: -2px;
    right: -2px;
    border-left: 0;
    border-top: 0;
  }
`;

const BlueprintOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(0, 160, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 160, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 5;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 3px;
  display: block;
  filter: saturate(0.9) contrast(1.1);
  transition: filter 0.3s ease;

  &:hover {
    filter: saturate(1.1);
  }
`;

const DocLabel = styled.div`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${(props) => (props.theme as Theme).accentColor};
  margin-bottom: 0.5rem;
  opacity: 0.8;
`;

interface AboutProps {
  header: string;
}

interface AboutData {
  about: string;
  imageSource: string;
}

function About(props: AboutProps) {
  const { header } = props;
  const [data, setData] = useState<AboutData | null>(null);
  const theme = useContext(ThemeContext) as Theme;

  useEffect(() => {
    fetch(endpoints.about, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: AboutData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />
      <AboutContainer>
        {data ? (
          <Fade triggerOnce duration={1000}>
            <Row className="align-items-center">
              <TextCol lg={7} md={12} className="order-2 order-lg-1">
                <DocLabel>REF_ID: PRO_BIO_772</DocLabel>
                <ReactMarkdown>{data.about}</ReactMarkdown>
              </TextCol>
              <ImageCol
                lg={5}
                md={12}
                className="order-1 order-lg-2 mb-5 mb-lg-0"
              >
                <Fade direction="right" triggerOnce delay={200}>
                  <ImageFrame>
                    <BlueprintOverlay />
                    <ProfileImage
                      src={data.imageSource}
                      alt="profile"
                      loading="lazy"
                    />
                  </ImageFrame>
                </Fade>
              </ImageCol>
            </Row>
          </Fade>
        ) : (
          <FallbackSpinner />
        )}
      </AboutContainer>
    </>
  );
}

export default About;
