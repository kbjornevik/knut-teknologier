import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery, Link } from "gatsby"
import Post from "../components/Post"
import Img from "gatsby-image"
import { Row, Col} from "reactstrap"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
      <SEO title="Home" keywords ={['gatsby','application','react']} />
      <h1>Knut's temaer</h1>
      <Row>
        <Col md="8"> 
        <StaticQuery
        query={indexQuery}
        render={data => {
           return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  path={node.frontmatter.path}
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
        </Col>
        <Col md="4">
           <Sidebar/>
        </Col>

      </Row>
    </Layout>
  )

  const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3     ) 
     {
     totalCount
     edges {
       node {
         id
         frontmatter {
           title
           date(formatString: "MMM Do YYYY")
           author
           path
           tags
           image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
         }
         excerpt
       }
 
     }
    }
   }`


export default IndexPage
