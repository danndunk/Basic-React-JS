import NavbarComponent from "../componentPage/narvbar/navbarComponent";
import FormEditBook from "../componentPage/form/formEditBook";
import { Container } from "react-bootstrap";

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function EditBook() {
  return (
    <Container fluid>
      <NavbarComponent />
      <FormEditBook />
    </Container>
  );
}
