import PropTypes from "prop-types"
import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from "reactstrap"

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
        
       <Navbar color="Light" fixed="top" light expand="md">
          <div className="container">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/turglede">Turglede</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/kraft">Kraft</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sykkel">Sykkel</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">Om Knut</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tags">Tema</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
       
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
