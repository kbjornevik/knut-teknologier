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
import FilefjellImg from "../images/Filefjell/tordvedtyinvann.jpg"
//        <a href="../001-om-knut">
// {node.frontmatter.image.childImageSharp.gatsbyImageData}

const Sidebar = (props) => {
  console.log("Sidebar   called ")
  return(
    <div>
       <Card>
        <CardBody>
            <CardTitle className="text-center  mb-3">
              <Link to="/blog/hei-her-har-du-knut">     
               <div> <img src={KnutImg}  style={{ width: "65%" }}  alt="Knut Bjørnevik" /></div>
              </Link>
                 IT-Rådgiver, utvikler, mosjonist
          </CardTitle>
          <Form className="text-center">
         
            <Button className="btn btn-success"  href="../hei-her-har-du-knut">
              Knut Bjørnevik
            </Button>
           
          </Form>
        </CardBody>
      </Card>
       {/* ---------------  Filefjell ------------------------------------------------- */}
       <Card>
        <CardBody>
            <CardTitle className="text-center  mb-3">
              <Link to="/blog/sykling-med-utgangspunkt-filefjell">     
               <div> <img src={FilefjellImg}  style={{ width: "80%" }}  alt="Filefjell, Otrøvann" /></div>
              </Link>
                 Sykkelturer på Filefjell, Vang, Lærdal
          </CardTitle>
          <Form className="text-center">
          
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
         {/* ---------------  LOG ------------------------------------------------- */}
   
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            De siste innleggene:
          </CardTitle>
          <StaticQuery  query={sidebarQuery}  render={(data) => (
            <div>
              {data.allMdx.edges.map(({ node }) => (
              
                <Card key={node.id} style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                 <Link to = {`/blog/${node.fields.slug}`}> 
                 {console.log("LOG node.title ",node.frontmatter.title)}
                 {node.frontmatter.image.childImageSharp.gatsbyImageData? 
                 <GatsbyImage style={{marginTop:"10px"} } 
                               image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                        
                         alt={node.slug}
                         className="card-image-top" />
                 : <div>LINK </div>}
                  </Link>
                 
                
                  <CardBody id="Layout_CardBody">
                     <span className="text-info"> {node.frontmatter.date}</span>
                     <CardTitle>
                     <Link to = {`/blog/${node.fields.slug}`}>  
                      
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
  allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 1) {
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
        fields {
          slug
          }
        slug
      }
    }
  }
}
`
  export default Sidebar