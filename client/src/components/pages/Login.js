//directs to create champion and champ select
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import Signup from "./Signup";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }

    // Clear form
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
              >
                Something went wrong with your login credentials!
              </Alert>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your email"
                  name="email"
                  onChange={handleInputChange}
                  value={userData.email}
                  required
                />
                <Form.Control.Feedback type="iånvalid">
                  Email is required!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Your password"
                  name="password"
                  onChange={handleInputChange}
                  value={userData.password}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Password is required!
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                disabled={!(userData.email && userData.password)}
                type="submit"
                variant="success"
              >
                Submit
              </Button>
            </Form>
          </>
        </Col>
        <Col lg={6}>
          <Signup />
        </Col>
      </Row>
      <Link to="/">
        <h3>Home page</h3>
      </Link>
    </Container>
  );
};

export default Login;
