import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Theme } from "../theme/themes";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const { title } = props;
  const theme = useContext(ThemeContext) as Theme;

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "1rem",
        padding: "90px 16px 0",
      }}
    >
      {/* Monospace "module" prefix */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: theme.accentColor,
          marginBottom: "0.6rem",
          opacity: 0.8,
        }}
      >
        // module.{title.toLowerCase().replace(/\s+/g, "_")}
      </p>

      {/* Section title */}
      <h2
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: theme.color,
          margin: "0 0 1rem",
        }}
      >
        {title}
      </h2>

      {/* Blueprint accent line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            background: `linear-gradient(to right, transparent, ${theme.accentColor})`,
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            border: `1.5px solid ${theme.accentColor}`,
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            width: 40,
            height: 1,
            background: `linear-gradient(to left, transparent, ${theme.accentColor})`,
          }}
        />
      </div>
    </div>
  );
}

export default Header;
