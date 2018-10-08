import React, { Component } from 'react'

class BlogPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props

    const posts =
      Array.from(edges)
        .map(({node}) => node)

    return (
      <section>
        <h1>Blog Posts</h1>
        Check out all this knowledge!
        {posts.map(p =>
          <div>{p.frontmatter.title}</div>
        )}
      </section>
    )
  }
}


export const query = graphql`
  query getAllPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
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
          }
        }
      }
    }
  }
`

export default BlogPage
