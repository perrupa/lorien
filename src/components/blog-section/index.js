import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import BlogThumbnail from './thumbnail'

const BlogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: ${p => p.wrap}
`


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

export { BlogContainer, BlogThumbnail }
