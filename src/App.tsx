import React, { useMemo, useEffect } from "react";
import "./App.css";
import "./css/design-system.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import AppContext from "./AppContext";
import MainApp from "./MainApp";
import GlobalStyles from "./theme/GlobalStyles";
import { lightTheme, darkTheme } from "./theme/themes";

function App() {
  // @ts-ignore
  window.matchMedia =
    window.matchMedia ||
    (() => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }));

  const darkMode = useDarkMode(true);

  // Sync theme with document element for global CSS variables
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode.value ? "dark" : "light",
    );
  }, [darkMode.value]);

  // Memoize the value object to prevent it from changing on each render
  const contextValue = useMemo(() => ({ darkMode }), [darkMode]);

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App" data-theme={darkMode.value ? "dark" : "light"}>
          <Router basename={process.env.PUBLIC_URL}>
            <MainApp />
          </Router>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
