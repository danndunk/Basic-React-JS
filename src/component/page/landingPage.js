import React from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import ButtonSignIn from "../buttonSignIn";
import ButtonSignUp from "../buttonSignUp";

import Logo from "../Assets/photo6129945846939234570.jpg";
import BookImage from "../Assets/photo6129945846939234571.jpg";

const styles = {
  ImageLandingImage: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },
  containerInfo: {
    position: "absolute",
    width: "30%",
    marginTop: "80px",
    marginLeft: "102px",
  },
  Logo: {
    width: "95%",
  },
  paragraph: {
    marginTop: "32px",
    marginBottom: "90px",
    fontSize: "24px",
  },
  btnGroup: {
    display: "flex",
  },
};

function LandingPage() {
  return (
    <Container fluid>
      <img
        src={BookImage}
        className="float-end"
        style={styles.ImageLandingImage}
        alt="imageLanding"
      />
      <div style={styles.containerInfo}>
        <img src={Logo} alt="logo" style={styles.Logo} />
        <p style={styles.paragraph}>
          Sign-up now and subscribe to enjoy all the cool and latest books - The
          best book rental service provider in Indonesia
        </p>
        <div style={styles.btnGroup}>
          <ButtonSignUp />
          <ButtonSignIn />
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
