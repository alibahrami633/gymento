import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../Grid";
import "./style.css";

function Nav() {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <Container>
        <div className="navbar-header">
          <NavLink to="/home" className="navbar-brand" style={{ color: '#ffcc00' }} >
            Gymento
          </NavLink>
        </div>
        <div>
          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link"
                  activeClassName="nav-link active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="nav-link active"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className="nav-link"
                  activeClassName="active"
                >
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
