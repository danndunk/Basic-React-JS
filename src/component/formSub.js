import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Assets/justwow.png";

const styles = {
  containerForm: {
    margin: "auto",
  },
  inputFile: {
    cursor: "pointer",
    border: "1px solid #BCBCBC",
    color: "#D60000",
    fontWeight: "900",
    width: "400px",
    height: "40px",
    boxSizing: "borderBox",
    borderRadius: "4px",
    backgroundColor: "#BCBCBC40",
    paddingLeft: "14px",
  },
  button: {
    width: "100%",
    background: "#D60000",
    borderRadius: "5px",
    fontWeight: "600",
    marginTop: "35px",
  },
  logo: {
    width: "45px",
  },
};

export default function FormSub(props) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const handleOnSub = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      style={{
        ...styles.containerForm,
        fontFamily: "avenir",
        fontSize: "18px",
      }}
    >
      <Form onSubmit={handleOnSubmit}>
        <p
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: "900",
            fontSize: "36px",
          }}
        >
          Premium
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Avenir",
          }}
        >
          Pay now and access all the latest books from
          <img
            src={Logo}
            alt="logo"
            style={{ ...styles.logo, marginLeft: "5px" }}
          />
        </p>
        <p
          style={{
            textAlign: "center",
            fontWeight: "900",
            fontFamily: "avenir",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ ...styles.logo, marginRight: "5px" }}
          />
          : 0981312323
        </p>
        <Form.Control
          type="email"
          placeholder="Input your account number"
          className="mb-3 mt-4"
          style={{ background: "#BCBCBC40" }}
        />
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label
            className="d-flex justify-content-between align-items-center"
            style={{ ...styles.inputFile, fontWeight: "900" }}
          >
            Attache proof of transfer
            <i
              class="bi bi-paperclip"
              style={{ fontSize: "27px", cursor: "pointer" }}
            ></i>
          </Form.Label>
          <Form.Control
            type="file"
            style={{ boxSixing: "border-box" }}
            hidden
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={styles.button}>
          Submit
        </Button>
      </Form>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Button
          onClick={handleOnSub}
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            boder: "none",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "24px",
              color: "#29BD11",
            }}
          >
            Thank you for subscribing to premium, your premium package will be
            active after our admin approves your transaction, thank you
          </p>
        </Button>
      </Modal>
    </div>
  );
}
