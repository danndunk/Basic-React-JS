import { Container } from "react-bootstrap";
import DetailBookInHome from "../componentPage/detailBook/detailBookInHomeList";
import NavsSub from "../componentPage/Navs/navsSub";

export default function DetailBookInHomePage() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <NavsSub />
        <div style={{ marginTop: "110px", marginLeft: "80px" }}>
          <DetailBookInHome />
        </div>
      </div>
    </Container>
  );
}
