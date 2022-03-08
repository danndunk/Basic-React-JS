import NavbarComponent from "../componentPage/narvbar/navbarComponent";
import TableTransaction from "../componentPage/table/tableTransactions";

import { Container } from "react-bootstrap";

export default function ListTransactions() {
  return (
    <Container fluid>
      <NavbarComponent />
      <TableTransaction />
    </Container>
  );
}
