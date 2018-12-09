import React, { Component } from 'react'
import Link from 'gatsby-link'
import './card.scss'

const Card = ({ title = '', body = '', url = '', className = '', image = null }) =>
  <div className={`card ${className}`}>
    <div className="card__body">
      <h3 className="card__title">{title}</h3>
      <p className="card__body-text">{body}</p>
      <img src={image} alt="" />
    </div>
    <Link to={url}>Learn More</Link>
  </div>

export default Card
