import React, { Component } from 'react'
import SubscribeLink from 'components/subscribe-button'

const NewsletterCTA = () =>
  <article>
    <h3>Inspiring E-mails</h3>
    <p>Sign up for my dope emails</p>
    <center>
      <p>
        <SubscribeLink>Subscribe to my E-mail list</SubscribeLink>
      </p>
    </center>
  </article>

export default NewsletterCTA
