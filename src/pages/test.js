import React from "react"
import { graphql , Link} from "gatsby"
import Layout from "../components/layout"
import dog from '../images/salty_egg.jpg';
function BlogIndex({ data }) {
    const { edges: posts } = data.allMdx
    return (
      
      <div>
        <img src={dog} alt="Cute Pup" />
        Beskrivelse :  {data.site.siteMetadata.description}
        {posts.map(({ node }) => {
          const { title, author } = node.frontmatter
          return (
            <div key={node.id}>
              <header>
                <div>{title}</div>
                <div>Posting By {author}</div>
              </header>
              <p>{node.excerpt}</p>
              <Link to={node.slug}>View Article</Link>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
  
  export default BlogIndex
  
  export const pageQuery = graphql`
  query blogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
  `
 