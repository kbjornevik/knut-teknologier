import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import "../styles/_filefjellRoll.scss"

//import { Container,Card,CardTitle,Row,Col,        CardImg,CardBody,CardColumns,         CardSubtitle,CardText,Button} from 'reactstrap';
//import PreviewCompatibleImage from './PreviewCompatibleImage'

class FilefjellRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMdx
    console.log("Edges Post",posts)
    return (
       <> 
      
     
      <div className="row"  >
              
         {posts &&
          posts.map(({ node: post }) => (
              
           
             <div className="frcolumn"  key={post.slug}>
               
             <h1 style={{textAlign: "Left"}}>{post.frontmatter.subtitle}</h1>
             <Link to = {`/blog/${post.fields.slug}`}> 
             <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData}  alt="post.frontmatter.author" />
             </Link>
                <p> {post.excerpt}</p>
               
                <Link className="button"  to = {`/blog/${post.fields.slug}`}>
                    Les mer...
                 </Link>
                 
            
             </div>
               
          
          ))}
        </div>
     </>
    )
  }
}

FilefjellRoll.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMdx(
            filter: {frontmatter: {templateMenuKey: {eq: "filefjell-page"}}}
            sort: {fields: frontmatter___subtitle}
          ) {
            edges {
              node {
                  slug
                frontmatter {
                  author
                  title
                  subtitle
                  date
                  description
                  heading
                  image {
                    childImageSharp {
                      gatsbyImageData(width: 350, , layout: FIXED)
                      fixed {
                        width
                      }
                    }
                  }
                }
                excerpt(pruneLength: 400)
                fields {
                    slug
                  }
              }
            }
          }
        }
      
    
    `}
    render={(data, count) => <FilefjellRoll data={data} count={count} />}
  />
)
