import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import Helmet from 'react-helmet';
const IndexPage = () => (
  <Layout>
      <SEO title="Home Knut Bjørnevik" keywords ={['gatsby','application','react']} />
      <Helmet>
         <meta name="google-site-verification" content="uxSz9Q95B4f6cnIDuVhrM_rRiprt3jDyyyUTglgNATg" />
         <meta name="x-robots-tag"  content="allow"/>
         <meta name="robots" content="allow"/>
      </Helmet>
      <h1>Knut's temaer</h1>
       <StaticQuery
        query={indexQuery}
        render={data => {
           return (
            <div>
              {data.allMdx.edges.map(({ node }) => (
                <Post 
                  id = {node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                  />
                  
              )
            )}
            </div>
          )
         }}
        />
        
    </Layout>
  )

  const indexQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4 ) 
     {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "YYYY Do MM")
           author
           tags
           image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
        
         excerpt
       }
 
     }
    }
   }
   `


export default IndexPage
