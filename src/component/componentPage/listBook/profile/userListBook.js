import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import userData from "../../../data/userData";

export default function UserListBook() {
  const navigate = useNavigate();
  const handleOnDetailBook = (e) => {
    e.preventDefault();
    navigate("/detail-book-user");
  };
  return (
    <div style={{ marginTop: "51px" }}>
      <h2>List Book</h2>
      <Row style={{ marginTop: "45px" }}>
        {userData.map((data, index) => (
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
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.author}</Card.Text>
                </Card.Body>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
