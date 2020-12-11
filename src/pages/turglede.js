import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import SEO from "../components/seo"
import { graphql, StaticQuery } from  "gatsby"


const TurgledePage =  () =>  (

<Layout>
      <SEO title="Home" keywords ={['gatsby','application','react']} />
      <h1>Ut på tur aldri sur</h1>
       <StaticQuery
        query={TurQuery}
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



const TurQuery = graphql`
query {
  allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "Turglede" } } }
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
export default TurgledePage