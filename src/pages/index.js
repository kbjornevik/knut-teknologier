import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery, Link } from "gatsby"
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
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  id = {node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
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
    allMarkdownRemark(
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
         fields {
          slug
        }
         excerpt
       }
 
     }
    }
   }
   `


export default IndexPage
