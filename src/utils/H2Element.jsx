import React from "react";
import styled from "styled-components";

const H2Element = ({ title }) => <StyledH2>{title}</StyledH2>;

const StyledH2 = styled.h2`
  color: #1976d2;
  font-weight: 300;
  margin: 1em 0 0 0;
  letter-spacing: 0.8px;
  font-family: "Roboto", sans-serif;
`;

export default H2Element;
