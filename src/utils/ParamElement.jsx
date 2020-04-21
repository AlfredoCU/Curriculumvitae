import React from "react";
import styled from "styled-components";

const ParamElement = ({ content }) => <StyledParam>{content}</StyledParam>;

const StyledParam = styled.p`
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
`;

export default ParamElement;
