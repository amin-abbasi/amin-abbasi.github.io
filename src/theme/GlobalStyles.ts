import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

const GlobalStyles = createGlobalStyle`
   body {
      background-color: transparent !important;
      color: ${(props) => (props.theme as Theme).color};
      transition: color var(--transition-fast);
   }
`;

export default GlobalStyles;
