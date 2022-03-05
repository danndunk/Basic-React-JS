import React from "react";
import { Modal } from "react-bootstrap";

function PopUpUnSub(props) {
  return (
    <Modal {...props} centered>
      <p
        className="text-danger"
        style={{ margin: "37px", fontSize: "20px", lineHeight: "33px" }}
      >
        please make a payment to read the latest books
      </p>
    </Modal>
  );
}

export default PopUpUnSub;
