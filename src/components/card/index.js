import React, { Component } from 'react'
import Link from 'gatsby-link'
import './card.scss'

const Card = ({ title = '', body = '', url = '' }) =>
  <div className='card'>
    <div className="card__body">
      <h3 className="card__title">{title}</h3>
      <p className="card__body-text">{body}</p>
    </div>
    <Link to={url}>Learn More</Link>
  </div>

export default Card
