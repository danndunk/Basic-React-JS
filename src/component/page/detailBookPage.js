import NavsSub from "../navsSub";
import { Container } from "react-bootstrap";
import DetailBook from "../detailBook";

export default function DetailBookPage() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <NavsSub />
        <div style={{ marginTop: "110px", marginLeft: "80px" }}>
          <DetailBook />
        </div>
      </div>
    </Container>
  );
}
