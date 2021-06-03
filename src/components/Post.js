import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Badge,Card,CardText,CardTitle,CardSubtitle,CardBody} from "reactstrap"
//import { slugify } from '../util/utilityFunctions'

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
 // justifyContent:'center',
 // alignItems:'center',
  
 // borderStyle: 'solid',
 // borderColor:'blue'
 // <p> AdresseTO: {`/${slug}`}</p>
 // LISTE: {tag} +{`/${slug}`}

};
const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    
    <Card style={CardStyle} > 
       
       
      <Link to = {`/${slug}`}>
          <GatsbyImage image={fluid} width="100%" className="card-image-center" alt={author} />
      </Link>
      <div >
      <CardBody style={CardBodyStyle}>
        <CardTitle>
              <Link to={`/${slug}`}> {title} </Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> av{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
         <CardText>{body}</CardText>
        
         <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to = {`/${slug}`}>
                <Badge color="secondary" className="text-uppercase">
                  TAG {tag}
                </Badge>
              </Link>
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
