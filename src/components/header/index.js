import React from 'react'
import Link from 'gatsby-link'
import headerImg from 'static/images/header.png'
import './header.scss'

export default () =>
  <div className="header">
    <Link to="/">
      <img src={headerImg}
        className="header__image"
        alt="Lo Life Coach: Rediscover you"
      />
    </Link>
  </div>
