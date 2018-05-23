import React from 'react'
import 'styles/post.scss'
import {SmallHeader} from 'components/header'
import GetInTouch from 'components/get-in-touch'
import Footer from 'components/footer'

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data
  const date = new Date(Date.parse(frontmatter.date))

  return (
    <div className="article">
      <div className="article__container">
        <SmallHeader />
        <h2 className="article__title">
          {frontmatter.title}
        </h2>
        <div className="article__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <GetInTouch />
        <Footer />
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

