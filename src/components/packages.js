import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Card from 'components/card'
import './packages.scss'

const text = `
## Work wi th me

The following programs are ...

Designed for those that are ready to;

- Truly commit to life, and experience a restorative transformation
- Realize your ability to manifest and unlock your purpose
- Create an extraordinary life, that is aligned with your authentic self
- Transform & re-discover the life you were meant to live
- Live a life of self love, joy, passion, and purpose
- Follow your intuition, and be open to what the universe presents you
- Be grateful for the life you have, and willing to devote your time into creating an awakening future for your heart and soul.

NOT for you if you:

- Are not ready or willing to invest in yourself
- Won’t to let go of excuses, and take ownership for your own life and choices
- Are not going to show up 100% and commit
- Don’t know your WHY
- Aren’t able to hold yourself accountable for your journey
`

const Packages = () =>
  <div>
    <div className="package-intro">
      <article className="package-intro">
        <ReactMarkdown source={text} />
      </article>
    </div>

    <div className="package-background">
        <Card
          title="Rediscover You"
          body="Feeling lost or a lack of self fulfillment? With this package we will strengthen your connection with your true self.  Begin to expand and deepen your self awareness and bring purpose back to your life."
          url="/rediscover-you" />
        <Card
          title="Rediscover Us (Group)"
          body="As a group we will explore our inner goddess.  We will strengthen our connection with our authentic selves through expanding our knowledge on our thoughts and emotions to have a better understanding on how to bring purpose and joy back into our lives."
          url="/rediscover-us" />
        <Card
          title="Awaken Your Authentic Self"
          body="This program empowers you to reconnect with the deepest part of your essential self. Here you will learn who you are and what you need to feel purpose and fulfillment, and let go of the beliefs and thoughts that no longer serve you."
          url="/awaken-your-authentic-self" />
        <Card
          title="Total Life Transformation"
          body="Through this program you will rediscover your authentic self.  We will go deep into your belief system and question behaviour patterns. Through this program you will learn to build better coping strategies, a stronger sense of self-worth, more confidence, and will learn to create a fulfilled life."
          url="/total-life-transformation" />
    </div>
  </div>

export default Packages
