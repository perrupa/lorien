import React, { Component } from 'react'
import './footer.scss'
import fb from 'static/icons/fb.svg'
import twitter from 'static/icons/twitter.svg'
import insta from 'static/icons/insta.svg'

const Footer = () =>
  <div className="footer">
    <div className="icon-container">
      <img src={insta} alt="follow me on Instagram" />
      <img src={fb} alt="follow me on Facebook" />
      <img src={twitter} alt="follow me on Twitter" />
    </div>

    <p>© Lorien Masters 2018</p>
  </div>

export default Footer
