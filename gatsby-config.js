module.exports = {
  siteMetadata: {
    title: `Knut Bjørnevik `,
    description: ` Knut Bjørnevik med ulike tema som intresserer ham, Filefjell, Sykkel, IT-Teknologi`,
    author: `kbjornevik@hotmail.com`,
    keywords: `Ut på Tur, Strava, Sykkel, Fjell,Filefjell`,
    siteUrl: `https://kbjornevikgatsby.netlify.app/`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: 'gatsby-plugin-sitemap',
    options:{ output: '/sitemap.xml'}
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
     resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-C0CPWCWPCQ", // Google Analytics / GA
                  ],

          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,
            // Setting this parameter is also optional
          
          },
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

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Knut the legende`,
        short_name: `Knut a Blog`,
        start_url: `https://kbjornevikgatsby.netlify.app/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kraft-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    'gatsby-plugin-offline',
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
    {resolve: 'gatsby-plugin-robots-txt',
      options: {
        host:   `https://kbjornevikgatsby.netlify.app/`,
        sitemap:   `https://kbjornevikgatsby.netlify.app/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]

        
      }
    },
 
  ],
}