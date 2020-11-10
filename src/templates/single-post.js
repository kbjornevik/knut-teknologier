import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap"
import  SEO from '../components/seo'
import { slugify } from "../util/utilityFunctions"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title} </h1>
      
             <Img   className="card-image-top"
                fluid={post.image.childImageSharp.fluid}
                />
              <CardBody>
                <CardSubtitle>
                    <span className="text-info">{post.date}</span> by{" "}
                    <span className="text-info">{post.author}</span>
                </CardSubtitle>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                <ul className="post-tags">
                     {post.tags.map(tag => (
                    <li key={tag}>
                     <Link to={`/tag/${slugify(tag)}`}>
                       <Badge color="primary">{tag}</Badge>
                     </Link>
                    </li>
                   ))}
                </ul>
              </CardBody>

      </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
             }
           }
        }
     }
     fields{
         slug
     }
    }
  }
`

export default SinglePost
