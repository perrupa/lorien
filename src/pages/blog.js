import React, { Component } from 'react'
import PageLayout from '../layouts/page-layout'
import { BlogContainer, BlogThumbnail } from '../components/blog-section'

class BlogPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props

    const posts =
      Array.from(edges)
        .map(({node}) => node)

    return (
      <PageLayout>
        <h1>Blog Posts</h1>
        <BlogContainer wrap="wrap">
          {posts.map(post => (
            <BlogThumbnail
              key={post.frontmatter.title}
              title={post.frontmatter.title}
              body={post.excerpt}
              image={post.frontmatter.image}
              path={post.frontmatter.path}
            />
          )
          )}
        </BlogContainer>
      </PageLayout>
    )
  }
}


export const query = graphql`
  query getAllPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fileAbsolutePath: {regex : "\/posts/"} }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            image
          }
        }
      }
    }
  }
`

export default BlogPage
