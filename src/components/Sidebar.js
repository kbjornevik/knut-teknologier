import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Form,
  Image,
  FormGroup,
  Input,
  Badge
} from "reactstrap"
import bergenckImg from "../images/vossgeilo2019.jpg" 
import KnutImg from "../images/knutpaaprest.jpg"


const Sidebar = () => (
    <div>
       <Card>
        <CardBody>
            <CardTitle className="text-center  mb-3">
            <div> <img src={KnutImg} rounded style={{ width: "50%" }} /></div>
             IT-Rådgiver, utvikler, mosjonist
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
            
            </FormGroup>
            <Button className="btn btn-success"  href="../001-om-knut">
              Knut Bjørnevik
            </Button>
           {/*} <Link to = "../001-om-knut">
                <Badge color="primary" className="text-uppercase">
                 OM KNUT  </Badge>
            </Link>*/}
          </Form>
        </CardBody>
      </Card>
      {/* ---------------  Bergen CK ------------------------------------------------- */}
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase">
            <a href="http:\\www.bergenck.no" target="_blank" rel="noopener noreferrer">Bergen CK</a>
          </CardTitle>
          <div>
             <a href="http:\\www.bergenck.no" target="_blank" rel="noopener noreferrer">
             <img src={bergenckImg} alt="Voss Geilo 2019" style={{ width: "100%" }}/>
             </a>
           </div>
          
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            De siste innleggene
          </CardTitle>
          <StaticQuery  query={sidebarQuery}  render={(data) => (
            <div>
              {data.allMdx.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={`../${node.slug}`}>
                    <Img  className="card-image-top" 
                      fluid={node.frontmatter.image.childImageSharp.fluid} />
                  
                  </Link>
                  <CardBody>
                     <span className="text-info"> {node.frontmatter.date}</span>
                     <CardTitle>
                     <Link to={node.slug}>  </Link>
                      
                      <a href={node.slug}> {node.frontmatter.title} </a>
                     
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>          )}
        />
 
        </CardBody>
      </Card>
    </div>
  )
  
  const sidebarQuery = graphql`
    query sidebarQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5 ) 
        {
        edges{
          node{
            id
            frontmatter{
              title
              date(formatString: "DD-MM-YYYY")
              image{
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            slug
            
          }
        }
      }
    }
  `
  export default Sidebar