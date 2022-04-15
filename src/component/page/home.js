import React from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navs from "../componentPage/Navs/navs";
import HomeContent from "../componentPage/jumbotron/homeContent";

function Home() {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

  console.log(state);

  const checkLogin = () => {
    if (state.isLogin === false) {
      navigate("/");
    }
  };
  checkLogin();

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
