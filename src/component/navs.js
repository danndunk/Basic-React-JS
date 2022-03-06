import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "./Assets/photo6129945846939234570.jpg";
import Profile from "./Assets/unnamed.jpg";

const styles = {
  Nav: {
    marginTop: "30px",
  },
  centerNav: {
    textAlign: "center",
  },
  imageLogo: {
    width: "150px",
    marginBottom: "32px",
  },
  imageProfile: {
    width: "120px",
    height: "120px",
    marginBottom: "32px",
    borderRadius: "50%",
  },
  icon: {
    marginRight: "23px",
  },
};

export default function Navs() {
  return (
    <Nav Link className="flex-column" style={styles.Nav}>
      <Link to="/home" style={styles.centerNav}>
        <img
          src={Logo}
          alt="Logo"
          style={{ ...styles.imageLogo, transform: "rotate(-13.38deg)" }}
        />
      </Link>
      <Link to="/home" style={styles.centerNav}>
        <img src={Profile} alt="profile" style={styles.imageProfile} />
      </Link>
      <Nav>
        <h4> Lapiek feat Tape</h4>
      </Nav>
      <Nav>sss</Nav>
      <hr style={{ width: "100%" }} />
      <Link
        to="/profile"
        style={{
          marginTop: "55px",
          fontSize: "23px",
          lineHeight: "101.5%",
          color: "#929292",
        }}
      >
        <i class="bi bi-person" style={styles.icon}></i>
        Profile
      </Link>
      <Link
        to="/subscribe"
        style={{
          marginTop: "85px",
          fontSize: "23px",
          lineHeight: "101.5%",
          color: "#929292",
        }}
      >
        <i class="bi bi-cash-coin" style={styles.icon}></i>
        Subscribe
      </Link>
      <hr style={{ marginTop: "85px" }} />
      <Link
        to="/"
        style={{
          marginTop: "55px",
          fontSize: "23px",
          lineHeight: "101.5%",
          color: "#929292",
        }}
      >
        <i class="bi bi-box-arrow-in-left" style={styles.icon}></i>
        Logout
      </Link>
    </Nav>
  );
}
