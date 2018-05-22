module.exports = {
  pathPrefix: '/lorien',
  siteMetadata: {
    title: 'Lo Life Coach',
    author: 'Lorien Masters',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet'
  ],
}
