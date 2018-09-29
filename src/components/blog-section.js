import React from 'react'
import Link from 'gatsby-link'

const PostList = ({ posts = [] }) => (
  <ul>
    {posts.map(post =>
      <li><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></li>
    )}
  </ul>
)

export default function BlogSection({ posts = [] }) {
  return (
    <div className="">
      <h1>POSTS</h1>
      <PostList posts={posts} />
    </div>
  )
}

