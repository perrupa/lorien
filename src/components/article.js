import React from 'react'
import 'styles/post.scss'

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data
  const date = new Date(Date.parse(frontmatter.date))

  return (
    <div className="article">
      <div class="article__container">
        <h2 className="article__title">
          {frontmatter.title}
        </h2>
        <div className="article__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
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
      }
    }
  }
`

