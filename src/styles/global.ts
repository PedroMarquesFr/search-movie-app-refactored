import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  padding:0;
  margin:0;
}

body {
  background: linear-gradient(to top, #1a1a1a 30%, #fff, 30%);
}
`;

export default GlobalStyle;
