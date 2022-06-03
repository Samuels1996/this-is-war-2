import React from "react";
import "bootstrap";
import { Nav } from "react-bootstrap";

import AuthService from "../../../utils/auth";

const LogInNav = () => {
  return (
    <Nav className="me-auto navbar-link-main">
      <Nav.Link href="/championselect">Champion</Nav.Link>
      <Nav.Link href="/fightchoice">Arena</Nav.Link>
      <Nav.Link href="/store">Store</Nav.Link>
      <Nav.Link onClick={AuthService.logout} href="/">
        Logout
      </Nav.Link>
    </Nav>
  );
};

export default LogInNav;
