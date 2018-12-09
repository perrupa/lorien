import React from 'react'
import Article from 'components/article'

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data

  return <Article
    title={frontmatter.title}
    html={html}
    showCTA={frontmatter.show_cta !== false}
    header={frontmatter.image}
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

