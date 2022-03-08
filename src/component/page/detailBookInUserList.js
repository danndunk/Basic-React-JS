import NavsSub from "../componentPage/Navs/navsSub";
import { Container } from "react-bootstrap";
import DetailBookInUser from "../componentPage/detailBook/detailBookInUserList";

export default function DetailBookInUserPage() {
  return (
    <Container fluid style={{ backgroundColor: "#F2F2F2" }}>
      <div className="d-flex">
        <NavsSub />
        <div style={{ marginTop: "110px", marginLeft: "80px" }}>
          <DetailBookInUser />
        </div>
      </div>
    </Container>
  );
}
