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
      <CustomNavbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4"><Sidebar/></Col>
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
