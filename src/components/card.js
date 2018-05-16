import React, { Component } from 'react'
import Link from 'gatsby-link'
import './card.scss'

const Card = ({ children }) =>
  <div className='card'>
    {children}
  </div>

export default Card
