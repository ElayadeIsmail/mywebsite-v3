module.exports = {
  siteMetadata: {
    title: `ELAYADE ISMAIL`,
    description: `Elayade ismail is a Web developer specializing in building exceptional websites, applications, and everything in between.`,
    twitterUsername: `@ElayadeIsmail`,
    image: "/og.png",
    siteUrl: "https://elayadeismail.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ElayadeIsmail`,
        short_name: `ElayadeIsmail`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: "#e20001" },
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
            resolve: "gatsby-remark-code-titles",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-186622412-2",
      },
    },
  ],
}
