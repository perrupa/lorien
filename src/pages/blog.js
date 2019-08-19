import React, { Component } from "react";
import styled from "@emotion/styled";

import PageLayout from "../layouts/page-layout";
import { BlogContainer, BlogThumbnail } from "../components/blog-section";
import headerImg from "static/images/lo-croatia-boat.jpg";

const HeroImage = styled.img`
  width: 100%;
`;

const HeroWrapper = styled.div`
  margin: 2em;
  position: relative;
`;

const HeroTitleContainer = styled.div`
  text-align: right;
  position: absolute;
  color: rgba(0, 0, 0, 0.7);
  top: 1em;
  right: 1em;
`;

class BlogPage extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges }
      }
    } = this.props;

    const posts = Array.from(edges).map(({ node }) => node);

    return (
      <PageLayout>
        <HeroWrapper>
          <HeroImage src={headerImg} alt="" />
          <HeroTitleContainer>
            <h1>The Lo Down</h1>
            <p>
              My thoughts on the <br />
              mind, ego and heart
            </p>
          </HeroTitleContainer>
        </HeroWrapper>
        <BlogContainer wrap="wrap">
          {posts.map(post => (
            <BlogThumbnail
              key={post.frontmatter.title}
              title={post.frontmatter.title}
              body={post.excerpt}
              image={post.frontmatter.image}
              path={post.frontmatter.path}
            />
          ))}
        </BlogContainer>
      </PageLayout>
    );
  }
}

export const query = graphql`
  query getAllPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
`;

export default BlogPage;
