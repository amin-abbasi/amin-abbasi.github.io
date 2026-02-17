import React, { useState, useEffect, useContext } from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import AppContext from "../AppContext";
import endpoints from "../constants/endpoints";
import Social from "./Social";
import FallbackSpinner from "./FallbackSpinner";
import "../css/home.css";
import { HomeData } from "../types/profile.types";
import { CSSProperties } from "react";

const styles = {
  nameStyle: {
    fontSize: "5em",
  } as CSSProperties,
  inlineChild: {
    display: "inline-block",
    margin: 0,
    lineHeight: "normal",
  } as CSSProperties,
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,
};

function Home() {
  const context = useContext(AppContext);
  const [data, setData] = useState<HomeData | null>(null);

  if (!context) return null;

  useEffect(() => {
    fetch(endpoints.home, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: HomeData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return data ? (
    <div style={{ height: "100vh", position: "relative" }}>
      <div className="background-container">
        <div className="background-image" />
        <div
          className="overlay"
          style={{
            backgroundColor: context.darkMode.value
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>
      <div className="text-container" style={styles.mainContainer}>
        <Fade direction="up" triggerOnce>
          <h1 style={styles.nameStyle}>{data?.name}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: data?.roles,
              }}
            />
          </div>
          <Social />
        </Fade>
      </div>
    </div>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
