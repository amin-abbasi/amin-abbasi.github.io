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
  background: "#fff",
  color: "#121212",
  accentColor: "#3D84C6",
  chronoTheme: {
    cardBgColor: "white",
    cardForeColor: "black",
    titleColor: "white",
  },
  timelineLineColor: "#ccc",
  cardBackground: "#fff",
  cardFooterBackground: "#f7f7f7",
  cardBorderColor: "#00000020",
  navbarTheme: {
    linkColor: "rgba(0,0,0,.55)",
    linkHoverColor: "rgba(0,0,0,.7)",
    linkActiveColor: "rgba(0,0,0,.9)",
  },
  bsPrimaryVariant: "light",
  bsSecondaryVariant: "dark",
  socialIconBgColor: "#121212",
};

export const darkTheme: Theme = {
  background: "#121212",
  color: "#eee",
  accentColor: "#3D84C6",
  chronoTheme: {
    cardBgColor: "#1B1B1B",
    cardForeColor: "#eee",
    titleColor: "black",
  },
  timelineLineColor: "#444",
  cardBackground: "#060606",
  cardFooterBackground: "#181818",
  cardBorderColor: "#ffffff20",
  navbarTheme: {
    linkColor: "rgba(255,255,255,.55)",
    linkHoverColor: "rgba(255,255,255,.75)",
    linkActiveColor: "rgba(255,255,255,1)",
  },
  bsPrimaryVariant: "dark",
  bsSecondaryVariant: "light",
  socialIconBgColor: "#fefefe",
};
