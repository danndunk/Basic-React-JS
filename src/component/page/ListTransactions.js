import NavbarComponent from "../componentPage/narvbar/navbarComponent";
import TableTransaction from "../componentPage/table/tableTransactions";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";

export default function ListTransactions() {
  const [state] = useContext(UserContext);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (state.isLogin === false) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Container fluid>
      <NavbarComponent />
      <TableTransaction />
    </Container>
  );
}
