import React from "react";
import { Container } from "react-bootstrap";

import Navs from "../componentPage/Navs/navs";
import FormSub from "../componentPage/form/formSub";

export default function Subscribe() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex ">
        <Navs />
        <div style={{ margin: "auto" }}>
          <FormSub />
        </div>
      </div>
    </Container>
  );
}
