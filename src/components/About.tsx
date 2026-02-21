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

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.1; /* Adjust to crop the bottom/stomach area */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align image to bottom so top stays visible, bottom gets cut */
  border-bottom: 3px solid ${(props) => (props.theme as Theme).accentColor};

  /* Animated Glowing Orb */
  &::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background: ${(props) => (props.theme as Theme).accentColor};
    filter: blur(80px);
    opacity: 0.35;
    border-radius: 50%;
    animation: floatOrb 8s ease-in-out infinite;
    z-index: 0;
    top: 20%;
  }

  @keyframes floatOrb {
    0% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }
`;

const QuoteText = styled.div`
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-style: italic;
  color: ${(props) => (props.theme as Theme).color}BB;
  text-align: center;
  position: relative;
  padding: 0 20px;

  &::before,
  &::after {
    content: '"';
    color: ${(props) => (props.theme as Theme).accentColor}80;
    font-size: 1.5rem;
    position: absolute;
    top: -10px;
  }

  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  z-index: 2;
  position: relative;
  filter: drop-shadow(
    0 0 10px ${(props) => (props.theme as Theme).accentColor}40
  );
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(
      0 0 40px ${(props) => (props.theme as Theme).accentColor}
    );
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
            <Row className="align-items-center align-items-lg-start">
              <TextCol lg={7} md={12} className="order-2 order-lg-1">
                <DocLabel>REF_ID: PRO_BIO_772</DocLabel>
                <ReactMarkdown>{data.about}</ReactMarkdown>
              </TextCol>
              <ImageCol
                lg={5}
                md={12}
                className="order-1 order-lg-2 mb-5 mb-lg-0 mt-lg-4"
              >
                <Fade direction="right" triggerOnce delay={200}>
                  <ProfileSection>
                    <ProfileImageContainer>
                      <ProfileImage
                        src={data.imageSource}
                        alt="profile"
                        loading="lazy"
                      />
                    </ProfileImageContainer>
                    <QuoteText>
                      The best code is the line you didn't have to write.
                    </QuoteText>
                  </ProfileSection>
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
