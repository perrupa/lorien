import React, { Component } from 'react'

import Link from 'gatsby-link'
import Header from 'components/header'
import Intro from 'components/intro'
import AboutMe from 'components/about-me'
import BlogSection from 'components/blog-section'
import Packages from 'components/packages'
import SlideShow from 'components/slideshow'
import NewsletterCTA from 'components/newsletter-cta'
import Footer from 'components/footer'

class IndexPage extends Component {
  render() {
    // const posts = [
    //   {frontmatter: {title: 'Authenticity', path: '/posts/authenticity' }},
    //   {frontmatter: {title: 'Post number 2', path: '/posts/second-post' }},
    // ]

    const { data: { allMarkdownRemark: { edges } } } = this.props

    const posts =
      Array.from(edges)
        .map(({node}) => node)

    return (
      <section>
        <Header />
        <Intro />
        <AboutMe />
        <Packages />
        <SlideShow />
        <BlogSection posts={ posts } />
        <NewsletterCTA />
        <Footer />
      </section>
    )
  }
}

export const query = graphql`
  query getPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
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

export default IndexPage
