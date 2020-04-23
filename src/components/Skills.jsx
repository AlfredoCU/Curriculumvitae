import React from "react";
import styled, { keyframes } from "styled-components";
import H2Element from "../utils/H2Element";

const Skills = ({ data }) => (
  <>
    <H2Element title="Skills" />
    <Container>
      {data &&
        data.map((skill, key) => (
          <div key={`SKILL-${key}`}>
            <SkillsH5>{skill.name}</SkillsH5>
            <SkillsLine>
              <SkillsSpan width={skill.percentage} />
            </SkillsLine>
          </div>
        ))}
    </Container>
  </>
);

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillsH5 = styled.h5`
  margin: 0.5em 0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background-color: #20534c;
`;

const move = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
  width: ${(props) => props.width};
  height: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  background-color: #00bfa5;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);

  &:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );

    z-index: 1;
    overflow: hidden;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
  }
`;

export default Skills;
