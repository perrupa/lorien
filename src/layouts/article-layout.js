import React from 'react'
import Article from 'components/article'

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data

  // debugger

  return <Article
    title={frontmatter.title}
    html={html}
    header={frontmatter.header_img}
    showCTA={frontmatter.show_cta !== false}
  />
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        header_img
        show_cta
      }
    }
  }
`

