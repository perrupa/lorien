import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import Lo from 'static/images/smile-step.jpg'
import { SectionTitle } from './section-title'
import { SplitContainer, Container } from './split-container'

const ResponsiveImage = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
`

const WorkWithMe = () =>
  <section className={css`
    background-color: #fff;
  `}>
    <SectionTitle>Work with me</SectionTitle>
    <SplitContainer >
      <Container className={css`
        align-content: flex-start;
        flex: .8 1;
      `}>
        <ResponsiveImage src={Lo} alt="" />
      </Container>

      <Container className={css`
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
      `}>
        <div>
          <p>
            My 1 on 1 coaching is designed for women who are ready to:
          </p>

          <ul>
            <li>Become more in tuned with who you are, what you need to feel purpose and fulfillment</li>
            <li>How to let go of the thoughts, emotions and beliefs that no longer serve you</li>
            <li>Be reinvigorated by learning how to rebuild your self-esteem and confidence</li>
            <li>The ability to enjoy the present and journey not just the outcome</li>
            <li>Tools to build accountability with yourself</li>
            <li>The ability to accept and celebrate the UNIQUE woman you are</li>
          </ul>

          <p><Link to="/who-i-am">Read more...</Link></p>
        </div>
      </Container>
    </SplitContainer>
  </section>

export default WorkWithMe
