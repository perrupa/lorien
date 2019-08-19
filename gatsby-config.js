module.exports = {
  pathPrefix: "/lorien",
  siteMetadata: {
    title: "Lo Life Coach",
    author: "Lorien Masters"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2276532189042328"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119894751-1",
        head: false,
        anonymize: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["localhost"]
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark",
    `gatsby-plugin-sass`,
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next"
  ]
};
