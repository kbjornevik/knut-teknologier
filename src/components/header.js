import PropTypes from "prop-types"
import React from "react"
import { Link} from "gatsby"

//import {   Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,DropdownMenu,DropdownItem,  NavItem,  NavLink } from "reactstrap"
import { Container, Navbar,Nav,NavDropdown } from 'react-bootstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
      <Container>
       <Navbar expand="md" color="Light" fixed="top" light >
          <Navbar.Brand href="/">{this.props.siteTitle}</Navbar.Brand>
            <Navbar.Toggle onClick={this.toggle} />
            <Navbar.Collapse isOpen={this.state.isOpen}  arie-controls="navbarResponsive">
              <Nav  as="ul" className="ml-auto" >
              <Nav.Item as="li">  <Link href="/turglede" className="nav-link" activeClassName="active">Turglede</Link>        </Nav.Item>
         
              <NavDropdown title="Kraft" id="nav-dropdown">
                    <NavDropdown.Item href="/nordpool" className="nav-link">Nordpool pris</NavDropdown.Item>
                    <NavDropdown.Item href="/kraft" className="nav-link"> Kraft</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item as="li">  <Link href="/sykkel" className="nav-link">Sykkel</Link> </Nav.Item>
              
              <NavDropdown title="Om Siden" id="nav-dropdown">
                    <NavDropdown.Item href="/about" className="nav-link">About site</NavDropdown.Item>
                    <NavDropdown.Item href="../001-om-knut" className="nav-link"> Om Knut</NavDropdown.Item>
                    <NavDropdown.Item href="/tags" className="nav-link"> Tema/Tags</NavDropdown.Item>

              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            
          </Navbar>
       </Container>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
