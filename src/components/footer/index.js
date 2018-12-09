import React, { Component } from 'react'
import fb from 'static/icons/fb.svg'
import twitter from 'static/icons/twitter.svg'
import insta from 'static/icons/insta.svg'
import './footer.scss'

const Image = ({src, alt}) =>
  <img className="footer__icon" src={src} alt={alt} />

const Footer = () =>
  <div className="footer">
    <div className="icon-container">
      <a className="link" href="http://instagram.com/lolifecoach">
        <Image src={insta} alt="follow me on Instagram" />
      </a>

      <a className="link" href="https://facebook.com/lorien.alexandra">
        <Image src={fb} alt="follow me on Facebook" />
      </a>

      <a className="link" href="https://twitter.com/lolifecoach">
        <Image src={twitter} alt="follow me on Twitter" />
      </a>
    </div>

    <p className="footer__text">
      © Lorien Masters {new Date().getFullYear()}
    </p>
  </div>

export default Footer
