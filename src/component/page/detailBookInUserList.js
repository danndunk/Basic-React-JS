import Navs from "../componentPage/Navs/navs";
import { Container } from "react-bootstrap";
import DetailBookInUser from "../componentPage/detailBook/detailBookInUserList";

export default function DetailBookInUserPage() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <Navs />
        <div style={{ width: "75%", marginLeft: "50px" }}>
          <DetailBookInUser />
        </div>
      </div>
    </Container>
  );
}
