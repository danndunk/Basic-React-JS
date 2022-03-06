import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import listBookData from "./data/listBookData";
import PopUpUnSub from "./popUpUnSub";

export default function List() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div style={{ marginTop: "51px" }}>
      <p
        style={{
          fontSize: "36px",
          fontFamily: "Times New Roman",
          fontWeight: "bold",
        }}
      >
        List Book
      </p>
      <Row style={{ marginTop: "45px" }}>
        {listBookData.map((data, index) => (
          <Col md={3}>
            <Card
              style={{
                width: "14rem",
                border: "none",
                margin: "0px auto",
                backgroundColor: "#F2F2F2",
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
                <Card.Body
                  style={{
                    color: "black",
                    paddingLeft: "0px",
                    textAlign: "left",
                  }}
                >
                  <Card.Title
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    {data.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "18px",
                      color: "#929292",
                    }}
                  >
                    {data.author}
                  </Card.Text>
                </Card.Body>
              </Button>
              <PopUpUnSub show={modalShow} onHide={() => setModalShow(false)} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
