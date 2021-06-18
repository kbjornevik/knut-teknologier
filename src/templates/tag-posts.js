import React from "react"
import { graphql,StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
// gatsbyImageData(width: 650, height: 371, layout: CONSTRAINED)


const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}" `

  return (
    <Layout pageTitle={pageHeader}>
       <StaticQuery
        query={tagQuery}
        render={data => {
           return (
             <div >
      {data.allMdx.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
        />
       
      ))}
        </div>
           );
         }}
        />
    </Layout>
  );
}

export const tagQuery = graphql`query ($tag: String!) {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {tags: {in: [$tag]}}}, limit: 4
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

export default TagPosts
