import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "./Assets/Wow.png";
import Profile from "./Assets/unnamed.jpg";

const styles = {
  Nav: {
    margin: "27px 40px 0px 79px",
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
  linkNavs: {
    fontSize: "23px",
    lineHeight: "101.5%",
    color: "#929292",
    textDecoration: "none",
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
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "900", fontSize: "24px" }}>Lapiek n Tape</p>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "#D60000",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Not Subscribed Yet
      </div>
      <hr style={{ width: "100%" }} />
      <Link to="/profile" style={{ ...styles.linkNavs, marginTop: "55px" }}>
        <i class="bi bi-person" style={styles.icon}></i>
        Profile
      </Link>
      <Link to="/subscribe" style={{ ...styles.linkNavs, marginTop: "85px" }}>
        <i class="bi bi-cash-coin" style={styles.icon}></i>
        Subscribe
      </Link>
      <hr style={{ marginTop: "85px" }} />
      <Link
        to="/"
        style={{
          ...styles.linkNavs,
          marginTop: "55px",
          marginBottom: "30px",
        }}
      >
        <i class="bi bi-box-arrow-in-left" style={styles.icon}></i>
        Logout
      </Link>
    </Nav>
  );
}
