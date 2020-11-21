import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap"
import  SEO from '../components/seo'
import { slugify } from "../util/utilityFunctions"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faStrava
  
} from "@fortawesome/free-brands-svg-icons";
import {
  faMountain
  
} from "@fortawesome/free-solid-svg-icons";
//import Sidebar from "../components/Sidebar"
  //{post.node.frontmatter.title}    
  //{post.node.frontmatter.title}

const SinglePost = ({ data,pageContext }) => {
  //const post = data.allMdx.nodes.frontmatter
  const post=data.mdx
  const baseUrl = 'https://knutteknologier.gtsb.io/'
  return (
       <Layout>
          <SEO title={post.frontmatter.title} />
          <h1>{post.frontmatter.title} </h1>
          <Card>
                <Img   className="card-image-top"
                fluid={post.frontmatter.image.childImageSharp.fluid}
                />
         <CardBody>
                <CardSubtitle>
                    <span className="text-info">{post.frontmatter.date}</span> skrevet av: {" "}
                    <span className="text-info">{post.frontmatter.author}</span>
                </CardSubtitle> 
                <MDXRenderer>{post.body}</MDXRenderer>
           </CardBody>
           <ul className="post-tags">
                  {post.frontmatter.tags.map(tag => (
                    <li key={tag}>
                     <Link to={`/tag/${slugify(tag)}`}>
                       <Badge color="primary">{tag}</Badge>
                     </Link>
                    </li>
                   ))}
            </ul>
            </Card>
            <Card>
            <h3 className="text-center">
               Del denne artikkelen
            </h3>
            <div className="text-center social-share-links">
              <ul>
                <li><a 
                    href={'https://www.facebook.com/sharer.php?=' 
                    + baseUrl 
                    + pageContext.slug
                    
                    } 
                    className="facebook"
                      target= "_blank"
                      rel= "noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                 </li>
              </ul>
            </div>
            </Card>
      </Layout>
  )
}
//  allMdx(filter : {slug: { eq: $slug }} ) {
  
export const postQuery = graphql`
query blogPostBySlug($slug: String!) {
  mdx(slug: {eq: $slug}){
    frontmatter {
      author
      title
      date(formatString: "YYYY-MM-DD")
      tags
      image {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
           }
         }
      }
    }
    fields {
      slug
    }
    id
    slug
    body
  }
}
`

export default SinglePost
