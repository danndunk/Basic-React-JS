import React from "react";
import { Container } from "react-bootstrap";

import NavsSub from "../navsSub";
import HomeContentPremium from "../homeContentPremium";

function HomePremium() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <NavsSub />
        <div style={{ marginTop: "60px" }}>
          <HomeContentPremium />
        </div>
      </div>
    </Container>
  );
}

export default HomePremium;
