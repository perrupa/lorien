import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// Styles
import 'styles/main.scss'

// Components
import Header from 'components/header'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Lorien Masters"
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      >
      </Helmet>
      <div className='container'>
        {children()}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
