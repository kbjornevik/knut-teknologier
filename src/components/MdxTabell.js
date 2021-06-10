import React  from 'react';
import {Row,Col} from 'reactstrap'
import { useStaticQuery, graphql } from "gatsby"
//import Img from 'gatsby-image';
import { GatsbyImage,StaticImage } from "gatsby-plugin-image";

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
 const flexContainer ={
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '30px',
    textAlign: 'center'
  }
  
  const flexItemLeft ={
    backgroundColor: '#f1f1f1',
    padding: '10px',
    flex: '50%'
  }
  
  const flexItemRight = {
    backgroundColor: 'dodgerblue',
    padding: '10px',
    flex: '50%',
    maxWidth: '300px'
  }
  const imageStyle={
    width: '500px'
  }
  export function TordVedTyinVann(props) {
      const filNavn ="../images/Filefjell/Tord-ved-Tyinvann.jpg"
     
      console.log('props:',filNavn)
    
    return (
      <StaticImage
        src= {filNavn}
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
        float ="left"
      />
    )
  }
export const MdxTabell = (props) => {
    const tekst = props.Tekst;
    const scrNavn ="../images/Filefjell/Tord-ved-Tyinvann.jpg"
    const pictureName =props.pictureName
  //  const { title } = useSiteMetadata()

    console.log("pictureName",pictureName)
    return(
        
     <div style={flexContainer}>
             <div style={flexItemLeft}>
                  {tekst}  <a target="_blank" rel="noopener noreferrer"  href="https://www.strava.com/activities/3771814330" > Strava tur </a> 
            </div>
            <div class={flexItemRight} id="flexRight">
            <TordVedTyinVann></TordVedTyinVann>
            </div>
            
     </div>
        

    
    );
}
export default MdxTabell
