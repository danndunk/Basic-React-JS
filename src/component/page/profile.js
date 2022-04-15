import React from "react";
import { Container } from "react-bootstrap";

import Navs from "../componentPage/Navs/navs";

import ContainerProfile from "../componentPage/containerProfile/containerProfile";
import UserListBook from "../componentPage/listBook/profile/userListBook";

function Profile() {
  const title = "Profile";
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <Navs title={title} />
        <div style={{ marginTop: "60px" }}>
          <ContainerProfile />
          <UserListBook />
        </div>
      </div>
    </Container>
  );
}

export default Profile;
