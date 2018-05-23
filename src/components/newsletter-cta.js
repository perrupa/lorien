import React, { Component } from 'react'
import SubscribeLink from 'components/subscribe-button'

const NewsletterCTA = () =>
  <article>
    <h3>Inspiring E-mails</h3>
    <p>Join my email list to receive weekly motivational tips as well as inspirational quotes and videos. By becoming a member you will also receive a sneak peak to my newest blogs, along with an invite to my join my exclusive Facebook Group. In this group you will be welcomed by a community of women, where I will share new ways to empower yourself and techniques to rediscover your inner voice. Can’t wait to connect.</p>
    <center>
      <p>
        <SubscribeLink>Subscribe to my E-mail list</SubscribeLink>
      </p>
    </center>
  </article>

export default NewsletterCTA
