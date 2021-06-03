import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import Seo from "../components/seo"
import { graphql, StaticQuery } from  "gatsby"


const TurgledePage =  () =>  (

<Layout>
      <Seo title="Home" keywords ={['gatsby','application','react']} />
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



const TurQuery = graphql`{
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {tags: {in: "Turglede"}}}
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
              gatsbyImageData(width: 800,  layout: CONSTRAINED)
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
//width: 650, height: 371, layout: CONSTRAINED