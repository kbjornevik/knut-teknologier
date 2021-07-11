import React from "react"
import { graphql} from "gatsby"
import  Seo from '../components/seo'

import Layout from "../components/layout-2"
import PropTypes from 'prop-types'

import FilefjellRoll from '../components/FilefjellRoll'
import "../styles/_filefjellRoll.scss"
import { Container } from 'reactstrap';


export const FilefjellPost = ({ 
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
 }) => (
  //const post = data.allMdx.nodes.frontmatter
  <div key="filefjell-Start"> 
   
         
   <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        
          maxHight: '100%',
        
    
      }}
      
     >
     
  
     <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >

<h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <Container  style={{
      width: "100%",
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 30,
      paddingBottom: 30,
     
    }}>
      
            
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>

              
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {/*heading*/}
                    </h3>
                    <p>{description}</p>
                  </div>
                
              
             
                  <h3 className="has-text-weight-semibold is-size-2">
                    Sykkelturer rangert
                  </h3>
                  <FilefjellRoll />
                
                
              
 
  
    </Container>

    Hei dette er knut i FilefjellPost
    </div>
  ) // Slutt FilefjellPost

//  allMdx(filter : {slug: { eq: $slug }} ) 
  FilefjellPost.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
   
  }
 
 
  
const IndexPage = ({ data }) => {
    const { frontmatter } = data.mdx
    return (
      <Layout>
         <Seo title="Home Knut Bjørnevik" keywords ={['Eidsbugarden','Sykkel','Vang','Lærdal']} />
    
        <FilefjellPost
             image={frontmatter.image}
             title={frontmatter.title}
             heading={frontmatter.heading}
             subheading={frontmatter.subheading}
             mainpitch={frontmatter.mainpitch}
             description={frontmatter.description}
             intro={frontmatter.intro}
        />
     
      </Layout>
    )
  }
  
  IndexPage.propTypes = {
    data: PropTypes.shape({
      mdx: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }
  
  export default IndexPage

  
export const postQuery = graphql`
query IndexPageTemplate {
  mdx(frontmatter: { templateKey: { eq: "filefjell-page" } }) {
    frontmatter {
      author
      title
      date(formatString: "YYYY-MM-DD")
      tags
      description
      image {
        childImageSharp {
          fluid(maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        
      }
      heading
      subheading
      mainpitch {
        title
        description
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


