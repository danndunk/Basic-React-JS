import React from "react";
import { Container } from "react-bootstrap";

import Navs from "../navs";
import HomeContent from "../homeContent";

function Home() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <Navs />
        <div style={{ marginTop: "60px" }}>
          <HomeContent />
        </div>
      </div>
    </Container>
  );
}

export default Home;
