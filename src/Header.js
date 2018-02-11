import React from 'react'
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";

class Header extends React.Component {

  render() {

    this.state = {
      login: null
    };

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>Valor</Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to={"/"}>
              <NavItem>Home</NavItem>
            </LinkContainer>

            { this.state.login != null && this.state.login.isLogged === true ? null :
              <LinkContainer to={"/login"}>
                <NavItem>Zaloguj</NavItem>
              </LinkContainer>
            }

            <LinkContainer to={"/register"}>
              <NavItem>Zarejestruj się</NavItem>
            </LinkContainer>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    login : state.login
  }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);