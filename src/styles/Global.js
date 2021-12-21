import { createGlobalStyles } from "styled-components";

const GlobalStyles = createGlobalStyles`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
