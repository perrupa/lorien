import React, { Component } from 'react'
import styled, { css } from 'react-emotion'

export const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: ${props => `${props.breakWidth || '800px'}`}) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  flex: 1 1;
  display: grid;
  align-content: center;
`

