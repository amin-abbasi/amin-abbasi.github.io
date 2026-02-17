import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Header from "./Header";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import { Theme } from "../theme/themes";

const AboutContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const TextCol = styled(Col)`
  flex-direction: column;
  text-align: left;
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media (min-width: 992px) {
    padding-right: 3rem;
  }

  h3 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${(props) => (props.theme as Theme).accentColor};
  }

  h4 {
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.3em;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  min-height: 700px;
  z-index: 1;

  @media (max-width: 992px) {
    min-height: 600px;
    margin-top: 3rem;
  }
`;

const CollageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 550px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 320px;
    height: 380px;
  }
`;

const BaseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border: 4px solid ${(props) => (props.theme as Theme).cardBorderColor};
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotate(-5deg) translateX(-10%);
`;

const OverlapImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 85%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  border: 8px solid ${(props) => (props.theme as Theme).cardBackground};
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotate(6deg) translateX(10%);

  &:hover {
    z-index: 3;
    transform: rotate(0deg) scale(1.08) translateY(-10px);
    border-color: ${(props) => (props.theme as Theme).accentColor};
  }
`;

const CollageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${BaseImage} {
    transform: rotate(-10deg) translateX(-35%) translateY(-5%);
  }
  &:hover ${OverlapImage} {
    transform: rotate(8deg) translateX(35%) translateY(5%);
  }
`;

interface AboutProps {
  header: string;
}

interface AboutData {
  about: string;
  imageSource: string;
  imageSource2?: string;
}

function About(props: AboutProps) {
  const { header } = props;
  const [data, setData] = useState<AboutData | null>(null);

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
      <div className="section-content-container">
        <AboutContainer>
          {data ? (
            <Fade triggerOnce>
              <Row className="align-items-center">
                <TextCol lg={7} md={12}>
                  <ReactMarkdown>{data.about}</ReactMarkdown>
                </TextCol>
                <ImageCol lg={5} md={12}>
                  <CollageWrapper>
                    <CollageContainer>
                      <BaseImage
                        src={data.imageSource}
                        alt="profile primary"
                        loading="lazy"
                      />
                      {data.imageSource2 && (
                        <OverlapImage
                          src={data.imageSource2}
                          alt="profile secondary"
                          loading="lazy"
                        />
                      )}
                    </CollageContainer>
                  </CollageWrapper>
                </ImageCol>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </AboutContainer>
      </div>
    </>
  );
}

export default About;
