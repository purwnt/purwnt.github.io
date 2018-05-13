module.exports = {
  siteMetadata: {
    title: 'Purwanto',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-remark'
  ],
  module.exports = {
    pathPrefix: `/purwanto.github.io`,
  }
}
