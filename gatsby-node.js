exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: 'empty',
        net: 'empty'
      }
    })
  }