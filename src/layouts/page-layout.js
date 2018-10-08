import React from 'react'

import {SmallHeader, ImageHeader} from 'components/header'
import GetInTouch from 'components/get-in-touch'
import Footer from 'components/footer'

import 'styles/page-layout.scss'

const PageLayout = ({ title, html, header, children = null }) =>
  <div className="layout-container">
    <div className="layout-container__container">
      <SmallHeader />
      <ImageHeader title={title} header={header} />
      <div className="layout-container__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {children}
      <GetInTouch />
      <Footer />
    </div>
  </div>

export default PageLayout

