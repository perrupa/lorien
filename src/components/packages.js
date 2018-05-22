import React, { Component } from 'react'
import Card from 'components/card'
import './packages.scss'

const Packages = () =>
  <div>
    <div className="package-intro">
      <article className="package-intro">
        <h2>Work wi&nbsp;th me</h2>
        <div>
          <p> The following programs are NOT for you if: </p>

          <ul>
              <li>Your not ready or willing to put the work in</li>
              <li>You you aren’t ready to make the investment for yourself</li>
              <li>You won’t show up 100%</li>
              <li>You don’t know your WHY</li>
              <li>You aren’t able to hold yourself accountable for your journey</li>
          </ul>

          <p> Designed for those that are ready: </p>


          <ul>
            <li>To truly commit to life & experience a restorative transformation</li>
            <li>To realize & manifest your calling & unlock the purpose that is within you</li>
            <li>To create & live a life that is aligned with your authentic self</li>
            <li>To transform & re-discover the life you were meant to live</li>
            <li>To live a life of self love, joy, passion, purpose & meaning</li>

            <li>To ignite the spark within & live a more inspired & mindful life</li>
            <li>To follow your intuition, & be open to what the universe is trying to give you</li>
            <li>To be grateful of the life you have, and willing to devote the time and effort into creating a new future.</li>
          </ul>
        </div>
      </article>
    </div>

    <div className="package-background">
        <Card
          title="Rediscover You"
          body="Feeling lost or a lack of self fulfillment? With this package we will strengthen your connection with your true self.  Begin to expand and deepen your self awareness and bring purpose back to your life."
          url="/total-life-transformation"/>
        <Card
          title="Rediscover Us (Group"
          body="As a group we will explore our inner goddess.  We will strengthen our connection with our authentic selves through expanding our knowledge on our thoughts and emotions to have a better understanding on how to bring purpose and joy back into our lives."
          url="/total-life-transformation"/>
        <Card
          title="Awaken Your Authentic Self"
          body="This program empowers you to reconnect with the deepest part of your essential self. Here you will learn who you are and what you need to feel purpose and fulfillment, and let go of the beliefs and thoughts that no longer serve you."
          url="/total-life-transformation"/>
        <Card
          title="Total Life Transformation"
          body="Through this program you will rediscover your authentic self.  We will go deep into your belief system and question behaviour patterns. Through this program you will learn to build better coping strategies, a stronger sense of self-worth, more confidence, and will learn to create a fulfilled life."
          url="/total-life-transformation"/>
    </div>
  </div>

export default Packages
