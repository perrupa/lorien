import React from 'react'
import { TopNav } from 'components/header/TopNav'
import GetInTouch from 'components/get-in-touch'
import Footer from 'components/footer'

import 'styles/page-layout.scss'

const PageLayout = ({ title, html, header, children = null }) =>
  <div>
    <TopNav />
    <div className="layout-container">
      <div className="layout-container__container">
        {children}
        <GetInTouch />
        <Footer />
      </div>
    </div>
  </div>

export default PageLayout

