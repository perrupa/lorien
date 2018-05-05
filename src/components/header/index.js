import React from 'react'
import './header.scss'

export default ({ children = [] }) => (
  <header className="header">
    <h1 className='header__title'>
      Lorien Masters
    </h1>
    <img className="header__headshot" src="images/Lo.jpg" alt="Beautiful young life coach" />
    <em className='header__subtitle'>Transformation Life Coach</em>
  </header>
)
