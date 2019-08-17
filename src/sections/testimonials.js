import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";

import { PinkSection } from "components/colored-section";

import BP from "static/images/testimonial-BP.jpg";
import AS from "static/images/testimonial-AS.jpg";
import GR from "static/images/testimonial-GR.jpg";

const Testimonial = styled.div`
  display: block;
  margin-bottom: 1em;
  flex: 0 30%;
  * {
    font-family: Georgia, serif;
  }
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: ${props => `${props.breakWidth || "800px"}`}) {
    flex-direction: row;
  }
`;

const TestimonialImageWrapper = styled.div`
  margin-bottom: 1.5em;
`;

const TestimonialImage = styled.img`
  display: block;
  margin: auto;
  width: 70%;
`;

const Testimonials = () => {
  return (
    <PinkSection>
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>

      <TestimonialList>
        <Testimonial>
          <TestimonialImageWrapper>
            <TestimonialImage src={AS} alt="" />
          </TestimonialImageWrapper>
          Lo has been such an incredible help to me. She goes above and beyond
          constantly, and genuinely cares about my well-being and success. I
          contacted her during a time when my I knew that my self confidence
          issues and anxiety were getting in the way of professional
          opportunities and life goals, and she has been an absolute rock and
          champion.
          <br />
          -- AS
        </Testimonial>
        <Testimonial>
          <TestimonialImageWrapper>
            <TestimonialImage src={GR} alt="" />
          </TestimonialImageWrapper>
          Lo guided and empowered me to boost my confidence. She believed in me
          so much. I can’t thank her enough for her patience and consistency to
          get me to where I am.
          <br />
          -- GR
        </Testimonial>
        <Testimonial>
          <TestimonialImageWrapper>
            <TestimonialImage src={BP} alt="" />
          </TestimonialImageWrapper>
          Lo pulled me out of a long time “rut” I was in, and helped me discover
          skills I didn’t even know I had. To have someone paint this picture of
          what change would look like - that made such a huge difference.
          <br />
          -- BP
        </Testimonial>
      </TestimonialList>
    </PinkSection>
  );
};
export default Testimonials;
