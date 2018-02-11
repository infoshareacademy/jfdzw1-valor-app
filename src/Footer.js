import React from 'react'
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr/>

        <ul className="list-inline">
          <li>
            <NavLink exact to={"/"} activeClassName="bg-success">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="bg-success" to={"/login"}>
              Zaloguj
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="bg-success" to={"/register"}>
              Zarejestruj się
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer;