import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
      <SEO title="Home" keywords ={['gatsby','application','react']} />
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
