import React from "react";
import { Container } from "react-bootstrap";

import Navs from "../navs";
import ContainerProfile from "../containerProfile";
import MyListBook from "../myListBook";

function Profile() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <Navs />
        <div style={{ marginTop: "60px" }}>
          <ContainerProfile />
          <MyListBook />
        </div>
      </div>
    </Container>
  );
}

export default Profile;
