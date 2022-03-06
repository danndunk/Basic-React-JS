import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

import listBookData from "./data/listBookData";

export default function ListBookPremium() {
  const navigate = useNavigate();
  const handleOnDetailBook = (e) => {
    navigate("/detail-book");
  };

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
                onClick={handleOnDetailBook}
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
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
