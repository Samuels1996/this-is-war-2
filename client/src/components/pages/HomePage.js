import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import mainLogo from "../../images/main-logo.png";
import "../Button/Button.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import AuthService from "../../utils/auth";

export default function HomePage() {
  return (
    <Container>
      <Row className="justify-content-lg-center">
        <Col xs="12">
          <Image
            // className="main-logo"
            className="main-logo d-block"
            src={mainLogo}
            alt="This is War 2 logo"
          ></Image>
        </Col>
        <Col xs="12">
          <div className="btn-container">
            <div className="pixel2">
              {AuthService.loggedIn() ? (
                <a href="/fightchoice" className="no-link">
                  Test your might!
                </a>
              ) : (
                <a href="/login" className="no-link">
                  Test your might!
                </a>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
