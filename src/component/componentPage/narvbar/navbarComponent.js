import { Navbar, Container, NavDropdown } from "react-bootstrap";
import Logo from "../../Assets/Wow.png";

const styles = {
  logo: {
    width: "130px",
    transform: "rotate(-13.38deg)",
  },
};

export default function NavbarComponent() {
  return (
    <Navbar style={{ marginTop: "15px" }} className="fixed-top">
      <Container>
        <Navbar.Brand href="/home">
          <img src={Logo} alt="" style={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle />

        <NavDropdown id="basic-nav-dropdown" style={{ marginRight: "35px" }}>
          <NavDropdown.Item
            href="#action/3.1"
            className="d-flex justify-content-between align-items-center"
          >
            <i
              class="bi bi-journal-arrow-up"
              style={{ marginLeft: "8px", fontSize: "20px" }}
            ></i>
            Add Book
          </NavDropdown.Item>
          <hr />
          <NavDropdown.Item
            href="#action/3.2"
            className="d-flex justify-content-between align-items-center"
          >
            <i
              class="bi bi-box-arrow-left"
              style={{ marginLeft: "8px", fontSize: "20px" }}
            ></i>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}
