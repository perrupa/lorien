import React, { Component } from 'react'

const url = 'https://lolifecoach.us18.list-manage.com/subscribe?u=19136259005fede89596c51da&id=b37b379eaf';

const SubscribeLink = ({className, children}) =>
  <a href={url}
    className={[
      className,
      'subscribe-link'
    ].join(' ')}
  >
    {children}
  </a>

export default SubscribeLink
