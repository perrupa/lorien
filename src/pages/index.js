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
    <p>I am an expert in overcoming lows, and re-building your self esteem and who you are. I am great at unlocking your subconscious to find out what really is going on & why you feel burnt out and uninspired. I can empower you to feel something, even a small spark to build the excitement back & recommit to your life.</p>
    <p> I will be your to guide to transform, and guide you to restore your confidence and courage to live your life to its fullest. Realize and manifest the truth of yourself and the greatness you sense inside you, create an extraordinary life, a way to your freedom, to your truth and your whole self.</p>
  </section>

const AboutMe = () =>
  <section>
      <h2>About Me</h2>
    <img src="" alt="Beautiful young life coach" />
  </section>

const Packages = () =>
  <section>
    <h2>Packages</h2>
    <article>
      <h3>Package 1</h3>
    </article>
    <article>
      <h3>Package 2</h3>
    </article>
    <article>
      <h3>Package 3</h3>
    </article>
  </section>

const ContactInfo = () =>
  <section>
    <h2>Let's talk</h2>
    <ul>
      <li>
        <a href="https://www.instagram.com/lorienmasters/?hl=en">Instagram</a>
      </li>
      <li>
        <a href="https://www.facebook.com/lorien.alexandra">Facebook</a>
      </li>
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
