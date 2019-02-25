import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import logo from 'static/images/logotype-white.svg'

const LogoImg = styled.img`
  height: 2em;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 1em;
`

const NavLink = styled.a`
  display: flex;
  align-self: center;
  color: white;
  font-size: 1em;
  text-decoration: none;
`

const LINKS = {
  // 'About Lo': '/who-i-am/',
  // 'Blog': '/blog/',
}

export const TopNav = ({ posts = [] }) => {
  return (
    <NavBar>
      <NavLink href="/">
        <LogoImg src={logo} alt="" />
      </NavLink>
      {Object.entries(LINKS).map(([name, link]) => (
        <NavLink href={link}>{name}</NavLink>
      ))}
    </NavBar>
  )
}

