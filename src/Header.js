import React  from 'react'
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>Valor</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to={"/"}>
              <NavItem>Home</NavItem>
            </LinkContainer>

            <LinkContainer to={"/login"}>
              <NavItem>Zaloguj</NavItem>
            </LinkContainer>

            <LinkContainer to={"/register"}>
              <NavItem>Zarejestruj się</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;