import React  from 'react'
import { Col, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel } from "react-bootstrap";

class Register extends React.Component {
  render() {
      return <div>
          <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                      Login
                  </Col>
                  <Col sm={10}>
                      <FormControl type="input" placeholder="Login"/>
                  </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                      Email
                  </Col>
                  <Col sm={10}>
                      <FormControl type="email" placeholder="Email"/>
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

              <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                      Powtórz hasło
                  </Col>
                  <Col sm={10}>
                      <FormControl type="password" placeholder="Powtórz hasło"/>
                  </Col>
              </FormGroup>

              <FormGroup>
                  <Col smOffset={2} sm={10}>
                      <Checkbox>
                          <p>Oświadczam, że zapoznałem się z zasadami <a href="#">regulaminu.</a></p>
                      </Checkbox>
                  </Col>
              </FormGroup>

              <FormGroup>
                  <Col smOffset={2} sm={10}>
                      <Button type="submit">Zarejestruj mnie</Button>
                  </Col>
              </FormGroup>
          </Form>
      </div>
  }
}

export default Register;