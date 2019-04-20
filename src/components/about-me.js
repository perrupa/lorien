import React, { Component } from 'react'
import profileImg from '../../static/images/smiling-profile.jpg'
import Link from 'gatsby-link'

const AboutMe = () => {
  return (
    <div>
      <article className='about-me'>
        <h2>About Me</h2>

        <p>
          Hey There! I’m Lo, self-love and rediscovery
          coach as well as a certified counsellor.
          I guide and support women looking to
          rediscover who they are.
        </p>

        <p>
          My mission is to help you build a life of
          purpose, while learning how to prioritize
          yourself and learn self-love.
        </p>

        <p>
          I am an expert in overcoming the lows,
          thriving on the highs, and rebuilding
          confidence and a sense of self. Together we’ll
          unlock the hidden thought patterns and
          behaviours keeping you from investing in
          yourself, leading to you feeling burnt out and
          uninspired in your relationships.
        </p>

      </article>
      <img src={profileImg} alt="" style={{ width: '100%', display: 'block' }} />
    </div>
  )
}
export default AboutMe
