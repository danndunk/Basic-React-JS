import React from "react";
import { Form, Button } from "react-bootstrap";

const styles = {
  input: {
    backgroundColor: "rgba(210, 210, 210, 0.25)",
  },
  button: {
    float: "right",
    background: "#FF0000",
    borderRadius: "5px",
    border: "none",
    fontWeight: "400",
  },
};

export default function FormAddBook() {
  return (
    <div style={{ width: "60%", margin: "180px auto 130px auto" }}>
      <Form>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "36px",
            marginBottom: "80px",
          }}
        >
          Add Book
        </p>
        <Form.Control
          type="email"
          placeholder="Title"
          className="mb-4"
          style={styles.input}
        />
        <Form.Control
          type="email"
          placeholder="Publication Date"
          className="mb-4"
          style={styles.input}
        />
        <Form.Control
          type="email"
          placeholder="Pages"
          className="mb-4"
          style={styles.input}
        />
        <Form.Control
          type="email"
          placeholder="Author"
          className="mb-4"
          style={styles.input}
        />
        <Form.Control
          type="email"
          placeholder="ISBN"
          className="mb-4"
          style={styles.input}
        />
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="About This Book"
          className="mb-4"
          style={{ ...styles.input, resize: "none" }}
        />
        <Form.Group
          controlId="formFile"
          className="mb-3"
          style={{ width: "23%" }}
        >
          <Form.Label
            className="d-flex justify-content-between align-items-center"
            style={{
              cursor: "pointer",
              border: "2px solid #BCBCBC",
              paddingLeft: "14px",
              fontWeight: "700",
              borderRadius: "4px",
              height: "38px",
              color: "#BCBCBC",
              backgroundColor: "rgba(210, 210, 210, 0.25)",
            }}
          >
            Attache Book File
            <i class="bi bi-paperclip" style={{ fontSize: "20px" }}></i>
          </Form.Label>
          <Form.Control
            type="file"
            style={{ boxSixing: "border-box" }}
            hidden
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={styles.button}
          className="d-flex justify-content-end align-items-center"
        >
          Add Book
          <i
            class="bi bi-journal-arrow-up"
            style={{ marginLeft: "8px", fontSize: "20px" }}
          ></i>
        </Button>
      </Form>
    </div>
  );
}
