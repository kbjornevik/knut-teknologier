import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import Helmet from 'react-helmet';
//import { Badge} from "reactstrap"

const IndexPage = () => (
  <Layout>
      <Seo title="Home Knut Bjørnevik" keywords ={['sykkel','fjelltur','gatsby','react']} />
      <Helmet>
         <meta name="google-site-verification" content="uxSz9Q95B4f6cnIDuVhrM_rRiprt3jDyyyUTglgNATg" />
         <meta name="x-robots-tag"  content="allow"/>
         <meta name="robots" content="allow"/>
      </Helmet>
      <h1>Knut's legendariske tema </h1>
      <StaticQuery
        query={indexQuery}
        render={data => {
           return (
             <div >
               {data.allMdx.edges.map(({ node }) => (
                
                 <Post 
                  key= {node.id}
                   id = {node.id}
                   title={node.frontmatter.title}
                   author={node.frontmatter.author}
                   slug={node.slug}
                   date={node.frontmatter.date}
                   body={node.excerpt}
                   fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
                   tags={node.frontmatter.tags}
               
             
                   />
                   
               )
             )}
             </div>
           );
         }}
        />
        
    </Layout>
  )

  const indexQuery = graphql`{
  allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 6) {
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
              gatsbyImageData(width: 800, layout: CONSTRAINED)
            
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
//width: 700, layout: CONSTRAINED
