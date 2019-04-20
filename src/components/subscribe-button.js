import React, { Component } from 'react'
import styled, { css } from 'react-emotion'

export const SectionTitle = styled.h2`
  text-align: center;
`

const url = 'https://lolifecoach.us18.list-manage.com/subscribe?u=19136259005fede89596c51da&id=b37b379eaf';

const SubscribeLink = ({className, children}) =>
  <a href={url} >
    {children}
  </a>

export default SubscribeLink
