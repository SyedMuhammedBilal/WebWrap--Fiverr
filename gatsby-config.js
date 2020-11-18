const dotenv = require('dotenv');
dotenv.config()

module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WebWrap",
        fieldName: "webwrap",
        url: process.env.WEBWRAP_URL,
        // HTTP headers
        headers: {
          'x-api-key': process.env.WEBWRAP_SECRET,
        },
      },
    }
  ],
}
