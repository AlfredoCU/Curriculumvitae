import React from "react";
import styled, { ThemeProvider } from "styled-components";

const getColor = (name) => {
  if (name === "facebook") return facebook;
  if (name === "twitter") return twitter;
  if (name === "linkedin") return linkedin;
  if (name === "github") return github;
};

const Social = ({ social }) => (
  <Container>
    <SocialUl>
      {social &&
        social.map((soc, key) => (
          <SocialLi key={`SOC-${key}`}>
            <SocialLink href={soc.url} target="_blank">
              <ThemeProvider theme={getColor(soc.name)}>
                <SocialIcon className={`fa fa-${soc.name}`} />
              </ThemeProvider>
            </SocialLink>
          </SocialLi>
        ))}
    </SocialUl>
  </Container>
);

const Container = styled.div`
  margin: 0 auto;
  display: block;
`;

const SocialUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;

const SocialLink = styled.a`
  font-size: 1.2em;
  text-decoration: none;
`;

const SocialIcon = styled.i`
  color: ${(props) => props.theme.color};
`;

const facebook = {
  color: "#3b5998",
};

const twitter = {
  color: "#38a1f3",
};

const linkedin = {
  color: "#0e76a8",
};

const github = {
  color: "#ffffff",
};

export default Social;
