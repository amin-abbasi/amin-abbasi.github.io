import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

const GlobalStyles = createGlobalStyle<{ theme?: Theme }>`
   body {
     background: ${({ theme }) => theme?.background};
     color: ${({ theme }) => theme?.color};
     transition: all 0.50s linear; 
  }
`;

export default GlobalStyles;
