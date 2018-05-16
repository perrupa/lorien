import React, { Component } from 'react'
import './about-me.scss'

const AboutMe = () =>
  <article className='about-me'>
    <div className="about-me__pretty-face">
      <img src='/images/Lo.jpg' />
    </div>
    <p className="about-me__content">
        {`I'm Lo, a transformational life coach. My mission is to guide and empower
      you to find love with your most authentic self. I want to help you love yourself
      and share your story so you know that you’re not alone. I want to encourage
      you to find and nurture whatever it is that’s special about you. Together
      we will build a healthy sense of self-esteem and self-love.`}
    </p>
  </article>

export default AboutMe
