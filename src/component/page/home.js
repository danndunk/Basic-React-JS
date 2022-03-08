import React from "react";
import { Container } from "react-bootstrap";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

import Navs from "../componentPage/Navs/navs";
import NavsSub from "../componentPage/Navs/navsSub";
import HomeContent from "../componentPage/jumbotron/homeContent";

function Home() {
  const [state, _] = useContext(UserContext);
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        {state.isSub ? (
          <>
            <NavsSub />
            <div style={{ marginTop: "60px" }}>
              <HomeContent />
            </div>
          </>
        ) : (
          <>
            <Navs />
            <div style={{ marginTop: "60px" }}>
              <HomeContent />
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default Home;
