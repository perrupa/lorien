import React, { Component } from 'react'
import './about-me.scss'

const AboutMe = () =>
  <article className='about-me'>
    <div className="about-me__pretty-face" />
    <div className="about-me__content">
      <h2>About Me</h2>
      <p>
          {`I am a Transformational life coach. My mission is to guide and empower
        you to find love with your most authentic self. I want to help you love yourself
        and share your story so you know that you’re not alone. I want to encourage
        you to find and nurture whatever it is that’s special about you. Together
        we will build a healthy sense of self-esteem and self-love.`}
      </p>
    </div>
  </article>

export default AboutMe
