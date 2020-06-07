import React from "react";
import styled from "styled-components";

const Test = () => (
  <>
    <Input placeholder="name" type="text" inputColor="#20534c" />
    <Input placeholder="lastname" type="text" />
  </>
);

const Input = styled.input`
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 3px;
  border: 1px solid #00bfa5;
  color: ${(props) => props.inputColor || "#1976d2"};
`;

// color: ${(props) => props.inputColor && "#1976d2"}; Si existe la propiedad asignale el color #1976d2
// color: ${(props) => props.inputColor || "#1976d2"}; Si no existe la propiedad asignale el color por defecto #1976d2

export default Test;
