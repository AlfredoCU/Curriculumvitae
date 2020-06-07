import React from "react";
import styled from "styled-components";

// Return Implícito!! Enpujar otros componentes.
const Main = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

const Container = styled.div`
  padding: 1em;
  display: grid; /* Display tipo grid */
  justify-content: center;
  grid-template-columns: minmax(auto, 1024px); /* Tamaño del contenedor h x w */
`;

const Content = styled.div`
  display: grid; /* Display tipo grid */
  grid-gap: 2rem; /* Distancia entre los contenedores row y column */
  grid-template-columns: 1fr; /* Cantidad y tamaño de contenedores */

  @media only screen and (min-width: 767px) {
    grid-template-columns: 1fr 3fr; /* Cantidad y tamaño de contenedores */
  }
`;

export default Main;
