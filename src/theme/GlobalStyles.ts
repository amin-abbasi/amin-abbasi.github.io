import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
   body {
     background-color: var(--bg-color);
     color: var(--text-primary);
     transition: background-color var(--transition-fast);
  }
`;

export default GlobalStyles;
