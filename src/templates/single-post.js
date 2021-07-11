import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap"
import  Seo from '../components/seo'
import { Slugify } from "../util/utilityFunctions"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ReactDisqusComments from 'react-disqus-comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faFacebook } from "@fortawesome/free-brands-svg-icons";
//import {   faMountain } from "@fortawesome/free-solid-svg-icons";
//import Sidebar from "../components/Sidebar"
  

const SinglePost = ({ data,pageContext }) => {
  //const post = data.allMdx.nodes.frontmatter
  const post=data.mdx
  const baseUrl = 'https://knutteknologier.gtsb.io/'
 console.log("Single_Post:",post.frontmatter.title)
  return (
    <Layout>
       <Seo title={post.frontmatter.title} description={post.frontmatter.description}/>
       
       <h1>{post.frontmatter.title} </h1>

       <Card>
             <GatsbyImage alt=""
               image={post.frontmatter.image.childImageSharp.gatsbyImageData}
               className="card-image-top" />
      <CardBody>
             <CardSubtitle>
                 <span className="text-info" key="Key1">{post.frontmatter.date}</span> skrevet av: {" "}
                 <span className="text-info"  key="Key2">{post.frontmatter.author}</span>
             </CardSubtitle> 
             <MDXRenderer>{post.body}</MDXRenderer>
        </CardBody>
        <ul className="post-tags" key="ULUniqkey">
               {post.frontmatter.tags.map(tag => (
                 <li key={tag}>
                   
                  <Link to={`/tag/${Slugify(tag)}`}>
                    <Badge color="primary">{tag}</Badge>
                  </Link>
                 </li>
                ))}
         </ul>
         </Card>
         <Card>
            <ReactDisqusComments
                   shortname="https-knutteknologier-gtsb-io"
                   identifier={post.id}
                   title={post.frontmatter.title}
                   url={post.url}
                   category_id={post.category_id}
            />
         </Card>
         <Card>
         <h3 className="text-center">
            Del denne artikkelen
         </h3>
         <div className="text-center social-share-links">
           <ul>
             <li key="liKey1"><a 
                 href={'https://www.facebook.com/sharer.php?u=' 
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
  );
}
//  allMdx(filter : {slug: { eq: $slug }} ) {
  
export const postQuery = graphql`query blogPostBySlug($id: String!) {
  mdx(id: {eq: $id}) {
    frontmatter {
      author
      title
      date(formatString: "YYYY-MM-DD")
      tags
      description
      image {
        childImageSharp {
          gatsbyImageData(width: 700, layout: CONSTRAINED)
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
