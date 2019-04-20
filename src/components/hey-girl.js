import React, { Component } from 'react'
import Link from 'gatsby-link'

const AboutMe = () => {
  return (
    <div>
      <article className='hey-girl'>
        <h2>Hey girl</h2>

        <p>Feeling like you lost yourself? Unsure of who you are? You feel empty. You don't even recognize yourself.  You think how did I get here?  You're ready to get your real self back, but it’s been so long that your unsure who your real self even is anymore?</p>


        <p>Whether you've lost yourself in your job, relationship, your role as a parent or simply feel lost in life in general, I’ve got you. </p>

        <p><Link to="/who-i-am">Read more...</Link></p>
      </article>
    </div>
  )
}
export default AboutMe
