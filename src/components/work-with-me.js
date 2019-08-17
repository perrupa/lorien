import React, { Component } from "react";
import styled, { css } from "@emotion/styled";
import Lo from "static/images/smile-step.jpg";
import Link from "gatsby-link";
import { SectionTitle } from "components/section-title";
import { SplitContainer, Container } from "components/split-container";

const ResponsiveImage = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
`;

const ListItem = styled.li`
  margin-bottom: 1em;
`;

const WorkWithMe = () => (
  <section
    className={css`
      background-color: #fff;
    `}
  >
    <SectionTitle>Work with me</SectionTitle>
    <SplitContainer>
      <Container
        className={css`
          align-content: flex-start;
          flex: 0.8 1;
        `}
      >
        <ResponsiveImage src={Lo} alt="" />
      </Container>

      <Container
        className={css`
          padding: 2em 5em;
          @media (max-width: 600px) {
            padding: 2em 3em;
          }
          @media (min-width: 800px) {
            font-size: 80%;
          }
          @media (min-width: 1000px) {
            font-size: 100%;
          }
        `}
      >
        <div>
          <p style={{ fontSize: "120%" }}>
            My 1 on 1 coaching is designed for women who are ready to:
          </p>

          <ul>
            <ListItem>
              Become more in tuned with who you are, what you need to feel
              purpose and fulfillment
            </ListItem>
            <ListItem>
              How to let go of the thoughts, emotions and beliefs that no longer
              serve you
            </ListItem>
            <ListItem>
              Be reinvigorated by learning how to rebuild your self-esteem and
              confidence
            </ListItem>
            <ListItem>
              The ability to enjoy the present and journey not just the outcome
            </ListItem>
            <ListItem>Tools to build accountability with yourself</ListItem>
            <ListItem>
              The ability to accept and celebrate the UNIQUE woman you are
            </ListItem>
          </ul>

          <p>
            <Link to="/rediscover-you">Read more...</Link>
          </p>
        </div>
      </Container>
    </SplitContainer>
  </section>
);

export default WorkWithMe;
