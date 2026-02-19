export interface ChronoTheme {
  cardBgColor: string;
  cardForeColor: string;
  titleColor: string;
}

export interface NavbarTheme {
  linkColor: string;
  linkHoverColor: string;
  linkActiveColor: string;
}

export interface Theme {
  background: string;
  color: string;
  accentColor: string;
  chronoTheme: ChronoTheme;
  timelineLineColor: string;
  cardBackground: string;
  cardFooterBackground: string;
  cardBorderColor: string;
  navbarTheme: NavbarTheme;
  bsPrimaryVariant: string;
  bsSecondaryVariant: string;
  socialIconBgColor: string;
}

export const lightTheme: Theme = {
  background: "#f0f4f8",
  color: "#1a1f23",
  accentColor: "#0070ba",
  chronoTheme: {
    cardBgColor: "#ffffff",
    cardForeColor: "#1a1f23",
    titleColor: "#1a1f23",
  },
  timelineLineColor: "rgba(0, 112, 186, 0.2)",
  cardBackground: "#ffffff",
  cardFooterBackground: "#f0f4f8",
  cardBorderColor: "rgba(0, 112, 186, 0.15)",
  navbarTheme: {
    linkColor: "rgba(26, 31, 35, 0.7)",
    linkHoverColor: "rgba(26, 31, 35, 0.9)",
    linkActiveColor: "#0070ba",
  },
  bsPrimaryVariant: "light",
  bsSecondaryVariant: "dark",
  socialIconBgColor: "#1a1f23",
};

export const darkTheme: Theme = {
  background: "#0d1117",
  color: "#e6edf3",
  accentColor: "#00a0ff",
  chronoTheme: {
    cardBgColor: "#0d1f2d",
    cardForeColor: "#e6edf3",
    titleColor: "#e6edf3",
  },
  timelineLineColor: "rgba(0, 160, 255, 0.2)",
  cardBackground: "#0d1f2d",
  cardFooterBackground: "#0a1929",
  cardBorderColor: "rgba(0, 160, 255, 0.15)",
  navbarTheme: {
    linkColor: "rgba(230, 237, 243, 0.6)",
    linkHoverColor: "rgba(230, 237, 243, 0.85)",
    linkActiveColor: "#00a0ff",
  },
  bsPrimaryVariant: "dark",
  bsSecondaryVariant: "light",
  socialIconBgColor: "#e6edf3",
};
