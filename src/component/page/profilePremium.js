import React from "react";
import { Container } from "react-bootstrap";

import NavsSub from "../navsSub";
import ContainerProfile from "../containerProfile";
import MyListBook from "../myListBook";

function ProfilePremium() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <NavsSub />
        <div style={{ marginTop: "60px" }}>
          <ContainerProfile />
          <MyListBook />
        </div>
      </div>
    </Container>
  );
}

export default ProfilePremium;
