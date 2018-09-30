import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import Lo from 'static/images/Lo.jpg'
import { SplitContainer, Container } from './split-container'

const ResponsiveImage = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
`

const Intro = () =>
  <SplitContainer className={css`
    background-color: #fff;
  `}>
    <Container className={css`
      align-content: flex-start;
      flex: 2 1;
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
        {`I'm Lo, a transformational life coach. My
          mission is to guide and empower you to find
          love with your most authentic self. Together
          we will build a healthy sense of self-esteem
          and self-love by`}
        <ul>
          <li>Sharing your story and learning you’re not alone</li>
          <li>Finding out what makes you special and nurturing it</li>
        </ul>
      </div>
    </Container>
  </SplitContainer>

export default Intro
