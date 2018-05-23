import React, { Component } from 'react'
import fb from 'static/icons/fb.svg'
import twitter from 'static/icons/twitter.svg'
import insta from 'static/icons/insta.svg'
import './footer.scss'

const Footer = () =>
  <div className="footer">
    <div className="icon-container">
      <a className="link" href="http://instagram.com/lorienmasters">
        <img src={insta} alt="follow me on Instagram" />
      </a>
      <a className="link" href="https://facebook.com/lorien.alexandra">
        <img src={fb} alt="follow me on Facebook" />
      </a>
      <a className="link" href="https://twitter.com/lolifecoach">
        <img src={twitter} alt="follow me on Twitter" />
      </a>
    </div>

    <p>© Lorien Masters 2018</p>
  </div>

export default Footer
