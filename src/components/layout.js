/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 *  <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import Navigation from "./Navigation"
import CustomNavbar from "./NavBar"
import Footer from "./Footer"
import {Row,Col} from 'reactstrap'

//import "../styles/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"
//import { NavbarBrand } from "react-bootstrap"
const container = {
  marginLeft: '1px',
  paddingTop: '1px',
  fontSize: '16px',
  textAlign: 'center'

}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    
     
    <div className="container" id="content">
      <Row key="Header">
           <Col md="12" key="HeadreCol"> <CustomNavbar siteTitle={data.site.siteMetadata?.title || `Title`} /></Col>
      </Row>
     
        <Row key="uniqueId1">
          <Col md="9" key="uniqueCol1">{children}</Col>
          <Col md="3"  key="uniqueCol2"><Sidebar/></Col>
        </Row>
        
      </div>
      <Footer/>
    
    </>
  )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
