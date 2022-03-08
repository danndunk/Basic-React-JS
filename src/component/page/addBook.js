import NavbarComponent from "../componentPage/narvbar/navbarComponent";
import FormAddBook from "../componentPage/form/formAddBook";
import { Container } from "react-bootstrap";

export default function AddBookPage() {
  return (
    <Container fluid>
      <NavbarComponent />
      <FormAddBook />
    </Container>
  );
}
