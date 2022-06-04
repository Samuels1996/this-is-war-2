import React from "react";
import "bootstrap";
import { Nav } from "react-bootstrap";

const LogOutNav = () => {
  return (
    <Nav className="me-auto navbar-link-main">
      <Nav.Link href="/login">Champion</Nav.Link>
      <Nav.Link href="/login">Arena</Nav.Link>
      <Nav.Link href="/login">Armory</Nav.Link>
      <Nav.Link href="/login">Log in / Sign up</Nav.Link>
    </Nav>
  );
};

export default LogOutNav;
