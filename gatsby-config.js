module.exports = {
  // pathPrefix: '/GHreponame',
  siteMetadata: {
    title: 'Lo Life Coach',
    author: 'Lorien Masters',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet'
  ],
}
