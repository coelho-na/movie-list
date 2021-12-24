import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  font-family: 'Lato', sans-serif;
}

a{
  text-decoration: none;
}
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default GlobalStyles;
