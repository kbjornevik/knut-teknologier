import React, {useState,} from 'react';
//import { Link } from "gatsby";
import {  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
   } from 'reactstrap';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import logo from '../images/logo.svg'
// Generere CSV fil {/*https://maketext.io*/}
const CustomNavbar = (props) => {
 const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 // Navbar.propTypes = {     light: true   }
  const divStyle= {
   // marginLeft: '1px',
    paddingRight: '9px',
    paddingLeft: '9px',
    float: "none",
    margin: "auto"
  }
  console.log("Navbar Props ",props);
  return (
    
    <div id="NavContainer" style={divStyle}>
      <Navbar color="ligth" light  expand="md" id="site-navbar" style={divStyle} >
        {/* <Container> */}
        <NavbarBrand style={{color: '#000'}} bg="dark" href="/">
        <img src={logo} alt="KNUT" style={{ width: '66px' }} />
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/tag/sykkel">Sykkel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tag/turglede">Turglede</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Nordpool
              </DropdownToggle>
              <DropdownMenu >
              <DropdownItem>
                   <NavLink href="/nordpool">DayaHeadpriser </NavLink>
                </DropdownItem>
                <DropdownItem>
                   <NavLink href="/kraft">BI-Rapport </NavLink>
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Om Siden
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                   <NavLink href="/about">Om siten </NavLink>
                </DropdownItem>
                <DropdownItem>
                   <NavLink href="/blog/hei-her-har-du-knut">Om Knut. </NavLink>
                </DropdownItem>
                <DropdownItem>
                   <NavLink href="/tags" >Tema Tags </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        
        </Collapse>
        {/* </Container> */}
      </Navbar>
      </div>
    
  )
}

export default CustomNavbar