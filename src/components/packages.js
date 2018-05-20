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
            <l
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
      <div className="package-container">
        <Card>
          <h3>Rediscover Us (Group)</h3>
        </Card>
        <Card>
          <h3>Rediscover You</h3>
        </Card>
      </div>
      <div className="package-container">
        <Card>
          <h3>Authentic Me</h3>
        </Card>
        <Card>
          <h3>Total Life Transformation</h3>
        </Card>
      </div>
    </div>
  </div>

export default Packages
