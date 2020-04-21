import React from "react";
import { createGlobalStyle } from "styled-components";

const StyledGlobal = () => <GlobalStyle />;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #ffffff;
    background-color: #212121;
    font-family: 'Lato', sans-serif;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background-color: #303030;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  ::selection {
    color: #ffffff;
    background-color: rgba(33, 150, 243, 0.25);
  }
  
  ::-moz-selection {
    color: #ffffff;
    background-color: rgba(33, 150, 243, 0.25);
  }
`;

export default StyledGlobal;
