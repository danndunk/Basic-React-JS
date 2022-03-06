import React from "react";
import { Container } from "react-bootstrap";

import Navs from "../navs";
import HomeContent from "../homeContent";

function Home() {
  return (
    <Container style={{ display: "flex" }}>
      <Navs />
      <div style={{ margin: "70px" }}>
        <HomeContent />
      </div>
    </Container>
  );
}

export default Home;
