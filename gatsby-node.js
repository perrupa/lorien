const path = require("path")

const query = `{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        html
        id
        frontmatter {
          date
          path
          title
        }
      }
    }
  }
}`

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve('src/layouts/article-layout.js')

  const createPageFromNode = ({ node }) =>
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })

  return graphql(query).then(({errors, data}) => {
    if (errors) {
      return Promise.reject(errors)
    }
    data.allMarkdownRemark.edges.forEach(createPageFromNode)
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles/'),
        sections: path.resolve(__dirname, 'src/sections/'),
        components: path.resolve(__dirname, 'src/components/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        static: path.resolve(__dirname, 'static'),
      }
    }
  });
};

exports.onCreateWebpackConfig = ({ getConfig, loaders, actions }) => {
  const config = getConfig();

  config.module.rules = [
    ...config.module.rules,
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath)
    }
  });
};
