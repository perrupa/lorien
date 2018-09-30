import React from 'react'
import Link from 'gatsby-link'
import Card from 'components/card'
import profileImg from '../../static/images/beach-lo-in-profile.jpg'

const PostList = ({ posts = [] }) => (
  <div className="blog-post__container">
    {posts.map(post =>
      <Card
        className="blog-post__summary"
        title={post.frontmatter.title}
        body={post.excerpt}
        path={post.frontmatter.path}
      />
    )}
  </div>
)

export default function BlogSection({ posts = [] }) {
  return (
    <div className="">
      <img src={profileImg} alt="" style={{ width: '100%', display: 'block' }} />
      <h3>Blog</h3>
      <PostList posts={posts} />
    </div>
  )
}

