module.exports = {
  siteMetadata: {
    title: `Knut Bjørnevik `,
    description: ` Knut Bjørnevik med ulike tema som intresserer ham, Filefjell, Sykkel, IT-Teknologi`,
    author: `kbjornevik@hotmail.com`,
    keywords: `Ut på Tur, Strava, Sykkel, Fjell,Filefjell`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `markdown-pages`,
          path: `${__dirname}/src/pages/posts`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kraft-icon.png`, // This path is relative to the root of the site.
      },
    },
    //`gatsby-transformer-remark`, Tatt ut Søndag 15.11
      //Ny for MDX
    {resolve: `gatsby-plugin-mdx`,  //Ny for MDX
       options: {
       extensions: [`.mdx`, `.md`],
       gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 600,
          },
        },
      ],
       },
    },
  
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [

          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW 
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}