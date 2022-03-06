import NavbarComponent from "../navbarComponent";
import FormAddBook from "../formAddBook";
import { Container } from "react-bootstrap";

export default function FormAddBook() {
  return (
    <Container fluid>
      <NavbarComponent />
      <FormAddBook />
    </Container>
  );
}
