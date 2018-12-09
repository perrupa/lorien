import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const BlogContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const ThumbnailWrapper = styled.div`
  flex: 0 30%;
`

const Thumbnail = styled.img`
  height: auto;
  width: 100%;
`

const BlogThumbnail = ({title, image, body, path}) => {
  console.log(title, image)
  return (
    <ThumbnailWrapper>
      <Thumbnail src={image} alt="" />
      <div>
        <Link to={path}>{title}</Link>
      </div>
    </ThumbnailWrapper>
  )
}


const PostList = ({ posts = [] }) => {
  return (
    <BlogContainer>
      {posts.map(post =>
        <BlogThumbnail
          key={post.frontmatter.title}
          title={post.frontmatter.title}
          body={post.excerpt}
          image={post.frontmatter.image}
          path={post.frontmatter.path}
        />
       )}
    </BlogContainer>
  )
}

export default function BlogSection({ posts = [] }) {
  console.log("Posts", posts)
  return (
    <div className="">
      <h3 style={{ textAlign: 'center' }}>
        <Link to="/blog/">Blog</Link>
      </h3>

      <PostList posts={posts} />
    </div>
  )
}

