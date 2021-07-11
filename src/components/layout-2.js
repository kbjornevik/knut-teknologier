
 import React from "react"
 import PropTypes from "prop-types"
 import CustomNavbar from "./NavBar"
 import Footer from "./Footer"
 import {Row,Col} from 'reactstrap'
 
 //import "../styles/index.scss"
 import 'bootstrap/dist/css/bootstrap.min.css';
 //import Sidebar from "../components/Sidebar"
 import { useSiteMetadata } from "../components/hooks/siteMetadata"
 //import { NavbarBrand } from "react-bootstrap"

 const Layout = ({ children }) => {
   const { title } = useSiteMetadata()
  
 
   return (
     <>
  
       <Row rowkey="LayoutHeader">
            <Col md="12" key="HeadreCol"> <CustomNavbar siteTitle={title || `Title`} /></Col>
       </Row>
      
        <div>{children}</div>
          
       
         
    
       <Footer/>
     
     </>
   )
   
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout