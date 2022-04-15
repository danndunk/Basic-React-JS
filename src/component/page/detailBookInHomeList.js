import { Container } from "react-bootstrap";
import DetailBookInHome from "../componentPage/detailBook/detailBookInHomeList";
import Navs from "../componentPage/Navs/navs";

export default function DetailBookInHomePage() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <Navs />
        <div style={{ width: "75%", marginLeft: "50px" }}>
          <DetailBookInHome />
        </div>
      </div>
    </Container>
  );
}
