/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./Footer"
import {Row,Col} from 'reactstrap'

import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuerySingle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        <Row>
          <Col md="10">{children}</Col>
          
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
