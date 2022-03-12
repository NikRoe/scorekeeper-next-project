import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
width:100 vw;
height: 100vh;
    background: linear-gradient(to bottom right,#9da1e7,#6062ce);
  };

  :root {
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
  }
`;
