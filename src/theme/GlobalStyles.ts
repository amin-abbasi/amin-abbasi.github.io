import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

const GlobalStyles = createGlobalStyle`
   body {
     background-color: ${(props) => props.theme.background} !important;
     color: ${(props) => props.theme.color};
     transition: background-color var(--transition-fast), color var(--transition-fast);
  }
`;

export default GlobalStyles;
