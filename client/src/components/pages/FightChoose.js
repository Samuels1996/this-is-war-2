//directs to  fight
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import darklord from "../../images/dungeon-boss.png";
import baba from "../../images/baba-yaga.png";
import mystery from "../../images/mystery.png";

export default function FightChoose() {
  return (
    <Container className="fight-choice">
      <Row>
        <Col>
          <Card
            style={{ width: "20rem", height: "40rem" }}
            bg="dark"
            text="light"
          >
            <Card.Img variant="top" src={darklord} className="card-img" />
            <Card.Body>
              <Card.Text className="card-title">Dark Lord</Card.Text>
              <Card.Text className="card-body-text">
                Can you best the Dark Lord?
              </Card.Text>
              <Button variant="danger" href="/fight">
                Test your might!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "20rem", height: "40rem" }}
            bg="dark"
            text="light"
          >
            <Card.Img variant="top" src={baba} className="card-img" />
            <Card.Body>
              <Card.Text className="card-title">Baba Yaga</Card.Text>
              <Card.Text className="card-body-text">
                Defeat the Dark Lord to unlock this encounter
              </Card.Text>
              <Button variant="secondary">Locked</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "20rem", height: "40rem" }}
            bg="dark"
            text="light"
          >
            <Card.Img variant="top" src={mystery} className="card-img" />
            <Card.Body>
              <Card.Text className="card-title">Mystery</Card.Text>
              <Card.Text className="card-body-text">
                Defeat Baba Yaga to unlock this secret encounter
              </Card.Text>
              <Button variant="secondary">Locked</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
