import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Button,Card,CardText,CardTitle,CardSubtitle,CardBody} from "reactstrap"
//import { slugify } from '../util/utilityFunctions'
import { Slugify } from "../util/utilityFunctions"

const CardStyle = {
  marginLeft: '10px',
  paddingTop: '5px',
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
 // borderStyle: 'solid',
 //  borderColor:'red'

};
const CardBodyStyle = {
  marginLeft: '1px',
  paddingTop: '1px',
  fontSize: '16px',
 // justifyContent:'center',
 // alignItems:'center',
  
 // borderStyle: 'solid',
 // borderColor:'blue'
 // <p> AdresseTO: {`/${slug}`}</p>
 // LISTE: {tag} +{`/${slug}`}

};
const Post = ({ id,title, author, slug, date, body, fluid, tags }) => {
  const trace = "Post.js  ID: " + {id} ;
  console.log("Post.js ",trace)
  
  return (
    
    <Card style={CardStyle} > 
       
       
      <Link to = {`/${slug}`}>
          <GatsbyImage image={fluid} width="100%" className="card-image-center" alt={author} />
      </Link>
      <div >
      <CardBody style={CardBodyStyle}>
        <CardTitle>
             <h2> <Link to={`/${slug}`}> {title} </Link></h2>
        </CardTitle>
         <p> slug:{slug}</p>
        <CardSubtitle color="primary"  id="CardSubtitleID" key="CardSubtitleKey">
          <span className="text-info" key="keyDate">{date}</span> av{" "}
          <span className="text-info" key="keyAuthor">{author}</span>
        </CardSubtitle>
         <CardText>{body}</CardText>
        
         <ul className="post-tags" >
          {tags.map(tag => (
            <li id={tag}>
              <Button color="primary" href={`/tag/${Slugify(tag)}`}>
              {tag} 
            </Button>
              
            </li>
          ))}
        </ul>
        <Link 
        to={`../${slug}`} className= "btn btn-outline-primary float-right">
            Les mere.. 
        </Link>
      </CardBody>
      </div>
    </Card>
  );
}

export default Post
