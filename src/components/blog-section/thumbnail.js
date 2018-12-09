import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const ThumbnailWrapper = styled.div`
  flex: 0 30%;
`

const Thumbnail = styled.img`
  height: auto;
  width: 100%;
`

export default function BlogThumbnail({title, image, body, path}) {
  console.log(title, image)
  return (
    <ThumbnailWrapper>
      <Link to={path}>
        <Thumbnail src={image} alt="" />
      </Link>
      <div>
        <Link to={path}>{title}</Link>
      </div>
    </ThumbnailWrapper>
  )
}

