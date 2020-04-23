import React from "react";
import Social from "./Social";
import styled, { css } from "styled-components";

const About = ({ avatar, name, profession, bio, address, social }) => (
  <Container>
    <Avatar>
      <figure>
        <AboutImg src={avatar} alt="" />
      </figure>
    </Avatar>
    <div>
      <AboutName>{name}</AboutName>
      <AboutProfession>{profession}</AboutProfession>
      <AboutBio font>{bio}</AboutBio>
      <AboutAddress>{address}</AboutAddress>
      <Social social={social} />
    </div>
  </Container>
);

const Container = styled.div`
  text-align: center;
`;

const Avatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  display: block;
  border-radius: 100%;
  border: 2px solid #1976d2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background: url(https://via.placeholder.com/160x160) no-repeat scroll 0 0;
`;

const AboutName = styled.h2`
  color: #1976d2;
  font-weight: 400;
  margin: 0.5em 0 0 0;
  letter-spacing: 1.2px;
  font-family: "Roboto", sans-serif;
`;

const AboutProfession = styled.p`
  color: #00bfa5;
  font-weight: 300;
  margin: 0.2em 0 1em 0;
  letter-spacing: 1.6px;
`;

const Paragraph = css`
  font-size: 1em;
  ${(props) => (props.font ? "font-weight: 300;" : "font-weight: 400;")};
`;

const AboutBio = styled.p`
  ${Paragraph};
`;

const AboutAddress = styled.p`
  ${Paragraph};
`;

export default About;
