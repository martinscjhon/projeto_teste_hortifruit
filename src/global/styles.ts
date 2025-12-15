// 1rem = 16px;
// 2rem = 32px; 

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    /* --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;

    --green: #33CC95;
    
    --shape: #ffffff; */
    font-family: "Google Sans";
  }

  * { 
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  html{
      @media screen and (max-width: 1080px) {
          font-size: 93.75%; //=15px
          width: 100%;
      }

      @media screen and (max-width: 720px) {
          font-size: 87.5%; //=14px
          width: 100%;
      }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong{
      font-weight: 600;
  }

  button{
    cursor: pointer;
    border-radius: 4px;
    border: none;
  }

  input {
    outline: none;
    border: none;
  }

  [disabled] {
      opacity: 0.6;
      cursor:not-allowed;
  }    
`