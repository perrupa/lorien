import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";

const ThumbnailWrapper = styled.div`
  position: relative;
  line-height: 0;
`;

const ThumbnailLinkContainer = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 1em;
  max-width: 50%;
  line-height: 1.1;
`;

const ThumbnailLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-shadow: 0 0 3px #000;
`;

const Thumbnail = styled.img`
  height: auto;
  width: 100%;
`;

export default function BlogThumbnail({ title, image, body, path }) {
  console.log(title, image);
  return (
    <ThumbnailWrapper>
      <Link to={path}>
        <Thumbnail src={image} alt="" />
      </Link>
      <ThumbnailLinkContainer>
        <ThumbnailLink to={path}>{title}</ThumbnailLink>
      </ThumbnailLinkContainer>
    </ThumbnailWrapper>
  );
}
