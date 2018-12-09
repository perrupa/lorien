import React from 'react'
import PageLayout from '../layouts/page-layout'
import {ImageHeader} from 'components/header'
import GetInTouch from 'components/get-in-touch'
import Footer from 'components/footer'

const Article = ({ title, html, header, showCTA = true}) =>
  <PageLayout title={title} header={header} html={html}>
    <ImageHeader title={title} header={header} />
    <div className="layout-container__content">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
    <GetInTouch showCTA={showCTA} />
  </PageLayout>

export default Article

