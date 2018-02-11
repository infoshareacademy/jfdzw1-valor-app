import React from 'react'
import { Col, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Login
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Login"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Hasło
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Hasło"/>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default Login;