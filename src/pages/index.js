import React, { Component } from 'react'

import Link from 'gatsby-link'
import { TopNav } from 'components/header/TopNav'
import Header from 'components/header'
import Intro from 'components/intro'
import AboutMe from 'components/about-me'
import HeyGirl from 'components/hey-girl'
import BlogSection from 'components/blog-section'
import WorkWithMe from 'components/work-with-me'
import SlideShow from 'components/slideshow'
import NewsletterCTA from 'components/newsletter-cta'
import Footer from 'components/footer'

import Testimonials from 'sections/testimonials'

class IndexPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props

    const posts =
      Array.from(edges)
        .map(({node}) => node)

    return (
      <section>
        <TopNav />
        <Header />
        <HeyGirl />
        <AboutMe />
        <WorkWithMe />
        <Testimonials />
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
      filter: { fileAbsolutePath: {regex : "\/posts/"} },
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
