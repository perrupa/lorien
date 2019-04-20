import React, { Component } from 'react'
import { SectionTitle } from 'components/section-title'
import { ColoredSection } from 'components/colored-section'
import SubscribeLink from 'components/subscribe-button'

const NewsletterCTA = () =>
  <ColoredSection>
    <article>
      <SectionTitle>Inspiring E-mails</SectionTitle>
      <p>
      Join my email list and awaken your inner goddess. Receive weekly motivational tips, inspirational quotes, and videos. Learn insightful practices on how to empower yourself, and techniques to rediscover your inner voice.
  Learn and Empower Today!
      </p>
      <center>
        <p>
          <SubscribeLink>Subscribe to my E-mail list</SubscribeLink>
        </p>
      </center>
    </article>
  </ColoredSection>

export default NewsletterCTA
