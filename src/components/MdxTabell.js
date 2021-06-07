import React  from 'react';
import {Row,Col} from 'reactstrap'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import Img from 'gatsby-image';
import { GatsbyImage } from "gatsby-plugin-image";
const Styletabell={
   // marginLeft: '10px',
   // paddingTop: '5px',
   // justifyContent:'center',
   // alignItems:'center',
   // display:'flex',
    borderStyle: 'solid',
    borderColor:'red',
    width: '100%'


}
// // <GatsbyImage image = {fluid} width="100%" className="card-image-center" alt="" />

const ImageFluid = () => {
	const  data  = useStaticQuery(
        graphql`
			query {
				placeholderImage: file(relativePath: { eq: "stravarutegpsdyrhaugstind.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 300) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
            `
    )
    return data.placeholderImage.childImageSharp.fluid
			
	
	
        };

const MdxTabell = (props) => {
    const tekst = props.Tekst;
    const pictureName =props.pictureName
  //  const { title } = useSiteMetadata()
    const fluid = ImageFluid();
    console.log("pictureName",pictureName)
    return(
        <div className="container" >
        <Row key="uniqueId1" style={Styletabell}>
          <Col md="8" key="uniqueCol1">{tekst}</Col>
          <Col md="4"  key="uniqueCol2">   ImageFluid: 
          <img src={pictureName} alt="Mountains" width="200"></img>
         
         </Col>
        </Row>

        </div>
    );
}
export default MdxTabell
