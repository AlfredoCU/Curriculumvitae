import React from "react";
import styled from "styled-components";

const H3Element = ({ children }) => <StyledH3>{children}</StyledH3>;

const StyledH3 = styled.h3`
  margin: 0.5em 0;
  font-weight: 400;
`;

export default H3Element;
