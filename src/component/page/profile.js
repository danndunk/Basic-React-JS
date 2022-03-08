import React from "react";
import { Container } from "react-bootstrap";

import NavsSub from "../componentPage/Navs/navsSub";
// import Navs from "../componentPage/Navs/navs";
import ContainerProfile from "../componentPage/containerProfile/containerProfile";
import UserListBook from "../componentPage/listBook/profile/userListBook";

// import { useContext } from "react";
// import { UserContext } from "../context/userContext";

function Profile() {
  // const [state, _] = useContext(UserContext);
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <NavsSub />
        <div style={{ marginTop: "60px" }}>
          <ContainerProfile />
          <UserListBook />
        </div>
      </div>
    </Container>
  );
}

export default Profile;
