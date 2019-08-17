import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";

import BlogThumbnail from "./thumbnail";

const BlogContainer = styled.div`
  padding: 0 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  grid-gap: 2em;
`;

const PostList = ({ posts = [] }) => {
  return (
    <BlogContainer>
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
  );
};

export default function BlogSection({ posts = [] }) {
  return (
    <div className="">
      <h3 style={{ textAlign: "center" }}>
        <Link to="/blog/">Blog</Link>
      </h3>

      <PostList posts={posts} />
    </div>
  );
}

export { BlogContainer, BlogThumbnail };
