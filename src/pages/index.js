import React, { Component } from 'react'
import Link from 'gatsby-link'
import PostList from 'components/Post-list'

class IndexPage extends Component {
  render() {
    const posts = []
    return (
      <div>
        <article>
          <h1 className='title'>
            Lorien Masters
          </h1>
          <em className='subtitle'>Transformation Life Coach</em>
        </article>

        <article>
          <h2>About Me</h2>
          <p>Sit harum deleniti vero reiciendis maiores. Repellendus molestias laborum aut magnam debitis modi Eligendi delectus ipsam porro facere explicabo eum. Ipsam in excepturi ducimus harum necessitatibus. Accusamus nisi consequatur natus ipsum illo amet accusantium voluptas dicta! Fugit deserunt animi non debitis nam Placeat excepturi eum dolorem nihil amet deserunt Quae.</p>
        </article>

        <article>
          <h2>About Me</h2>
          <p>Sit harum deleniti vero reiciendis maiores. Repellendus molestias laborum aut magnam debitis modi Eligendi delectus ipsam porro facere explicabo eum. Ipsam in excepturi ducimus harum necessitatibus. Accusamus nisi consequatur natus ipsum illo amet accusantium voluptas dicta! Fugit deserunt animi non debitis nam Placeat excepturi eum dolorem nihil amet deserunt Quae.</p>
        </article>

        <article>
          <h2>About Me</h2>
          <p>Sit harum deleniti vero reiciendis maiores. Repellendus molestias laborum aut magnam debitis modi Eligendi delectus ipsam porro facere explicabo eum. Ipsam in excepturi ducimus harum necessitatibus. Accusamus nisi consequatur natus ipsum illo amet accusantium voluptas dicta! Fugit deserunt animi non debitis nam Placeat excepturi eum dolorem nihil amet deserunt Quae.</p>
        </article>

      </div>
    )
  }

  getPosts() {
    const { edges } = this.props.data.allMarkdownRemark
    return Array.from(edges)
  }
}

export const query = graphql`
  query getPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
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
          }
        }
      }
    }
  }
`

export default IndexPage
