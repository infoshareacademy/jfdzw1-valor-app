import React from 'react'
import {Col, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel} from "react-bootstrap";
import {connect} from "react-redux"

class Login extends React.Component {

  handleClick = () => {
    this.props.authenticatedUser({login: this.login.value, password: this.pass.value})

  };

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail" >
          <Col componentClass={ControlLabel} sm={2}>
            Login
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Login" inputRef={(login) => this.login = login }/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Hasło
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Hasło" inputRef={(pass) => this.pass = pass }/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.handleClick}>Zaloguj</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

const getData = (login) => {
  return (dispatch) => {
    fetch("http://api.isa-jfdzw1.vipserv.org/valor/user/authenticate", {
      method: 'POST',
      body: JSON.stringify(login),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(rsp => rsp.json())
      .then(data => {
        console.log(login,data);
        dispatch({type: "LOGGED", isLogged: data.isAuthenticated})
      })
      .catch(err => {
        dispatch({type: "ERROR"})
      })
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticatedUser: (login) => dispatch(getData(login))
  }
};

const connectedLogin = connect(null, mapDispatchToProps)(Login);

export {connectedLogin as Login};