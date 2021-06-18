import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,

} from "reactstrap"
import bergenckImg from "../images/vossgeilo2019.jpg" 
import KnutImg from "../images/knutpaaprest.jpg"
//        <a href="../001-om-knut">

const Sidebar = (props) => {
  console.log("Sidebar   called ")
  return(
    <div>
       <Card>
        <CardBody>
            <CardTitle className="text-center  mb-3">
              <Link to="/Om-knut">     
               <div> <img src={KnutImg}  style={{ width: "50%" }}  alt="Knut Bjørnevik" /></div>
              </Link>
                 IT-Rådgiver, utvikler, mosjonist
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
            
            </FormGroup>
            <Button className="btn btn-success"  href="../Om-knut">
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
            De siste innleggene:
          </CardTitle>
          <StaticQuery  query={sidebarQuery}  render={(data) => (
            <div>
              {data.allMdx.edges.map(({ node }) => (
              
                <Card key={node.id} style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                 <Link to = {`/${node.slug}`}> LINK 
                 <GatsbyImage style={{marginTop:"10px"} }
                         
                         image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                   
                         alt={node.slug}
                         className="card-image-top" />

                  </Link>
                 
                
                  <CardBody id="Layout_CardBody">
                     <span className="text-info"> {node.frontmatter.date}</span>
                     <CardTitle>
                     <Link to = {`/${node.slug}`}>  
                      
                       {node.frontmatter.title} 
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>          )}
        />
 
        </CardBody>
      </Card>
    </div>
  )}
  
  const sidebarQuery = graphql`query sidebarQuery {
  allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 5) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD-MM-YYYY")
          image {
            name
            childImageSharp {
              gatsbyImageData(width: 300, layout: CONSTRAINED)
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