import React from "react";
import "bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import smLogo from "../../images/sm-logo.png";
import LogInNav from "./NavTypes/LogInNav";
import LogOutNav from "./NavTypes/LogOutNav";

import AuthService from "../../utils/auth";

const SiteNav = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="This is War 2 small logo"
            src={smLogo}
            width="45"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          {AuthService.loggedIn() ? LogInNav() : LogOutNav()}
        </div>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
