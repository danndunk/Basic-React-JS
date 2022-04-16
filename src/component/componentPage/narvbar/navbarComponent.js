import { Navbar, Container, Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Wow.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [_, dispatch] = useContext(UserContext);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const listBook = (e) => {
    navigate("/list-books");
  };

  return (
    <Navbar style={{ marginTop: "15px" }} className="fixed-top">
      <Container>
        <Navbar.Brand href="/list-transaction">
          <img src={Logo} alt="" style={styles.logo} />
        </Navbar.Brand>

        <Dropdown>
          <Dropdown.Toggle style={styles.dropdown} />

          <Dropdown.Menu>
            <NavDropdown.Item
              as={Link}
              to="/add-book"
              className="d-flex justify-content-between align-items-center"
            >
              <i
                className="bi bi-journal-arrow-up"
                style={{ marginLeft: "8px", fontSize: "20px" }}
              />
              Add Book
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item
              className="d-flex justify-content-between align-items-center"
              onClick={listBook}
            >
              <i
                className="bi bi-card-list"
                style={{ marginLeft: "8px", fontSize: "20px" }}
              />
              List Book
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item
              className="d-flex justify-content-between align-items-center"
              onClick={logout}
            >
              <i
                className="bi bi-box-arrow-left"
                style={{ marginLeft: "8px", fontSize: "20px" }}
              />
              Logout
            </NavDropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

const styles = {
  logo: {
    width: "130px",
    transform: "rotate(-13.38deg)",
  },
  dropdown: {
    background: "transparent",
    border: "none",
    color: "blue",
    marginRight: "35px",
    fontSize: "30px",
  },
};
