import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import blossom from 'static/images/blossom.jpg'
import camomile from 'static/images/camomile.jpg'
import button from 'static/images/green-button.jpg'

const TestimonialWrapper = styled.div`
  padding: 1em;
  background-color: white;
`

const Testimonial = styled.div`
  display: block;
  margin-bottom: 1em;
  flex: 0 30%;
  * {
    font-family: Georgia, serif;
  }
`

const TestimonialHeader = styled.h4`
  text-align: center;
`

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: ${props => `${props.breakWidth || '800px'}`}) {
    flex-direction: row;
  }
`

const FlowerWrapper = styled.div`
  margin-bottom: 1.5em
`

const Flower= styled.img`
  display: block;
  margin: auto;
  width: 40%;
`

const Testimonials = () => {
  return (
    <TestimonialWrapper>
      <h2 style={{textAlign: 'center'}}>Why choose Lo</h2>

      <TestimonialList>
        <Testimonial>
          <FlowerWrapper>
            <Flower src={camomile} alt="" />
          </FlowerWrapper>
          <TestimonialHeader>Passionate</TestimonialHeader>
          “I love working with Lo she keeps me accountable and thinking about things that I either over look or have not considered. She’s so passionate about her work and it really shows through the little things she does for you like send a text to check up, and working at my pace so that we can really hone in on my strengths.”
          <br />
          -- DH
        </Testimonial>
        <Testimonial>
          <FlowerWrapper>
            <Flower src={button} alt="" />
          </FlowerWrapper>
          <TestimonialHeader>Genuine</TestimonialHeader>
          “Lo has been such an incredible help to me. She goes above and beyond constantly, and genuinely cares about my well-being and success. I contacted her during a time when my I knew that my self confidence issues and anxiety were getting in the way of professional opportunities and life goals, and she has been an absolute rock and champion.”
          <br />
          -- AS
        </Testimonial>
        <Testimonial>
          <FlowerWrapper>
            <Flower src={blossom} alt="" />
          </FlowerWrapper>
          <TestimonialHeader>Vision Driven</TestimonialHeader>
          “Lo pulled me out of a long time “rut” I was in, and helped me discover skills I didn’t even know I had. To have someone paint this picture of what change would look like - that made such a huge difference. A before and after. And then at a certain point, accountability becomes less of a focus because it’s not about getting it done to get it done - it’s about the journey. I learned things about myself and about what I am capable of that are invaluable.”
          <br />
          -- BP
        </Testimonial>
      </TestimonialList>
    </TestimonialWrapper>
  )
}
export default Testimonials

