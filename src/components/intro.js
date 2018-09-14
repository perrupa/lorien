import React, { Component } from 'react'
import './intro.scss'

const Intro = () =>
  <article className='intro'>
    <div className="intro__pretty-face">
      <img className="intro__backup-photo" src="../../static/images/Lo.jpg" alt="" />
    </div>

    <div className="intro__content">
        {`I'm Lo, a transformational life coach. My mission is to guide and empower
      you to find love with your most authentic self. Together we will build a healthy
      sense of self-esteem and self-love by`}
      <ul>
        <li>Sharing your story and learning you’re not alone</li>
        <li>Finding out what makes you special and nurturing it</li>
      </ul>
    </div>
  </article>

export default Intro
