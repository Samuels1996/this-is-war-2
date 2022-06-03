import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import AuthService from "../../utils/auth";
import mainLogo from "../../images/main-logo.svg";
import "../Button/Button.css";
import { Container, Row, Col, Image } from "react-bootstrap";

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
              <Link to="/login" className="no-link">
                Test your might!
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
