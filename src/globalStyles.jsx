import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
  }
  
  svg{
  position: absolute;
  width: 100%;
  height: 70vh;
  -o-object-fit: cover;
  object-fit: cover;
}
`;
