require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Jules Woodwark`,
    description: "Jules Woodwark's portfolio website",
    titleTemplate: '',
    url: `https://www.juleswoodwark.dev`,
    image: './public/static/favicon.png',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jules Woodwark's Portfolio",
        short_name: 'Jules Woodwark',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FFF',
        display: 'standalone',
        icon: 'src/media/images/icon.svg',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:300, 600`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.GATSBY_PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `./src/media/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-170110817-1',
        head: true,
        defer: true,
        enableWebVitalsTracking: true,
      }
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'modal',
        id: 'modal',
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'alert',
        id: 'alert',
      },
    },
  ],
};
