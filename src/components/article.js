import React from 'react'
import 'styles/article.scss'
import {SmallHeader} from 'components/header'
import GetInTouch from 'components/get-in-touch'
import Footer from 'components/footer'

const Article = ({ title, html, header, showCTA = true}) =>
  <div className="article">
    <div className="article__container">
      <SmallHeader />
      { header ?
        <img className="article__header-img" src={header} alt={title} />
        : null }
      <div className="article__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <GetInTouch showCTA={showCTA} />
      <Footer />
    </div>
  </div>

export default Article

