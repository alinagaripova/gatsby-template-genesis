module.exports = {
  pathPrefix: "/gatsby-template-genesis",
  siteMetadata: {
    title: "Genesis-разработка сайтов разработка сайтов",
    description: "Genesis - разработка web-проектов, консалтинговые услуги, project resque"
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-transformer-remark`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `projects`,
              path: `${__dirname}/src/projects`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `articles`,
              path: `${__dirname}/src/articles`,
          },
      },
      {
      resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            // icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
          },
      },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
