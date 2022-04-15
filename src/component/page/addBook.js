import NavbarComponent from "../componentPage/narvbar/navbarComponent";
import FormAddBook from "../componentPage/form/formAddBook";
import { Container } from "react-bootstrap";

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function AddBookPage() {
  const [state] = useContext(UserContext);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (state.isLogin === false) {
      navigate("/");
    }
  };
  checkLogin();
  return (
    <Container fluid>
      <NavbarComponent />
      <FormAddBook />
    </Container>
  );
}
