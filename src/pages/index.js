import React, { Component } from 'react'

import Link from 'gatsby-link'
import ContactInfo from 'components/contact-info'
import Header from 'components/header'
import AboutMe from 'components/about-me'
import MissionStatement from 'components/mission-statement'
import Packages from 'components/packages'

class IndexPage extends Component {
  render() {
    return (
      <section>
        <Header />
        <MissionStatement />
        <AboutMe />
        <Packages />
        <ContactInfo />
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
