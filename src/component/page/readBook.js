import Logo from "../Assets/Wow.png";
import Read from "../Assets/readbook.jpg";

import { Container, Navbar } from "react-bootstrap";

const styles = {
  logo: {
    width: "105.03px",
    transform: "rotate(-13.38deg)",
  },
  content: {
    margin: "50px 0px 30px 0px",

    width: "100%",
  },
};

export default function ReadBook() {
  return (
    <Container fluid style={{ backgroundColor: " #F2F2F2" }}>
      <Navbar>
        <Container>
          <Navbar.Brand href="/home">
            <img src={Logo} alt="" style={styles.logo} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <img src={Read} alt="" style={styles.content} />
    </Container>
  );
}
