import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import listBookData from "./data/listBookData";
import PopUpUnSub from "./popUpUnSub";

export default function List() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div style={{ marginTop: "51px" }}>
      <h2>List Book</h2>
      <Row style={{ marginTop: "45px" }}>
        {listBookData.map((data, index) => (
          <Col md={3}>
            <Card
              style={{
                width: "14rem",
                border: "none",
                margin: "0px auto",
              }}
            >
              <Button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => setModalShow(true)}
              >
                <Card.Img
                  variant="top"
                  src={data.image}
                  style={{ borderRadius: "10px" }}
                />
              </Button>
              <PopUpUnSub show={modalShow} onHide={() => setModalShow(false)} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
