import React, { Component } from 'react'
import Link from 'gatsby-link'

const Header = () =>
  <section>
    <h1 className='title'>
      Lorien Masters
    </h1>
    <em className='subtitle'>Transformation Life Coach</em>
  </section>

const MissionStatement = () =>
  <section>
    <h2>Mission Statement</h2>
  </section>

const AboutMe = () =>
  <section>
      <h2>About Me</h2>
    <img src="" alt="Beautiful young life coach" />
  </section>

const Packages = () =>
  <section>
    <h2>Packages</h2>
    <article></article>
    <article></article>
    <article></article>
  </section>

const ContactInfo = () =>
  <section>
    <h2>Let's talk</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MissionStatement />
        <AboutMe />
        <Packages />
        <ContactInfo />
      </div>
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
