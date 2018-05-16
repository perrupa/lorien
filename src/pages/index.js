import React, { Component } from 'react'

import Link from 'gatsby-link'
import Header from 'components/header'
import Intro from 'components/intro'
import AboutMe from 'components/about-me'
import Packages from 'components/packages'
import Footer from 'components/footer'

class IndexPage extends Component {
  render() {
    return (
      <section>
        <Header />
        <Intro />
        <AboutMe />
        <Packages />
        <Footer />
      </section>
    )
  }
}

// export const query = graphql`
//   query getPosts {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           html
//           id
//           frontmatter {
//             date
//             path
//             title
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
