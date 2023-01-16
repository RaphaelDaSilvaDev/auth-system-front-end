import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]};
  }
  
  :root{
    font-size: 62.5%;
  }
  body{
    background-color: ${(props) => props.theme["gray-200"]};
    color: ${(props) => props.theme["gray-900"]};
  }
  body, input-security, textarea, button, input{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
  }
  h1, h2, h3, h4, h5,h6{
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme["gray-900"]};
  }
`;
