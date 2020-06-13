/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Dora Zhao',
    description: 'Dora Zhao Personal Website'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dora Zhao`,
        short_name: `Dora Zhao`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/assets/favicon.png'
      },
    },
  ],
}
