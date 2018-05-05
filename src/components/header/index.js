import React from 'react'
import './header.scss'

export default ({ children = [] }) => (
  <header className="header">
    <img className="header__image"
      src="images/header.png"
      alt="Beautiful young life coach" />
  </header>
)
