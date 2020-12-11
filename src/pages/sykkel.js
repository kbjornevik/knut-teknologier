import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"


const SykkelPage =  () =>  (

<Layout>
      <SEO title="Home" keywords ={['gatsby','application','react']} />
      <h1>Sykkel tema</h1>
       <StaticQuery
        query={SykkelQuery}
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



const SykkelQuery = graphql`
query {
  allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "Sykkel" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
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
export default SykkelPage