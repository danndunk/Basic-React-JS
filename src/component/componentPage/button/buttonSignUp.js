import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import FormSignUp from "../form/formSignUp";

const styles = {
  btnSignUp: {
    width: "190px",
    height: "50px",
    borderRadius: "5px",
    border: "none",
    fontWeight: "600",
    fontSize: "18px",
    backgroundColor: "#D60000",
    marginRight: "31px",
    color: "white",
  },
};

const ButtonSignUp = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalShow(true)} style={styles.btnSignUp}>
        Sign Up
      </Button>
      <FormSignUp show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ButtonSignUp;
