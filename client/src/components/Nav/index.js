import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from '../context/UserContext'
import { Container } from "../Grid";

import "./style.css";

function Nav() {
  const { userState } = useContext(UserContext);
  if (userState) {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Container>
          <div className="navbar-header">
            <NavLink to="/home" className="navbar-brand" style={{ color: '#ffcc00' }} >
              Gymento
          </NavLink>
          </div>
          <div className="navbar-brand">
            <span>logged in as: {userState && userState.name}</span>
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
