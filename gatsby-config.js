module.exports = {
  siteMetadata: {
    title: `Knut Bjørnevik `,
    description: ` Knut Bjørnevik med ulike tema som intresserer ham, Filefjell, Sykkel, IT-Teknologi`,
    author: `kbjornevik@hotmail.com`,
    keywords: `Ut på Tur, Strava, Sykkel, Fjell,Filefjell`,
    siteUrl: `https://knutteknologier.gtsb.io/`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
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
  
 
  ],
}