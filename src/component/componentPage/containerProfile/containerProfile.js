import { Button } from "react-bootstrap";
import Profile from "../../Assets/unnamed.jpg";

const styles = {
  containerProfile: {
    width: "1050px",
    background: "#FFD9D9",
    borderRadius: "8px",
    padding: "40px 44px 30px 35px",

    fontWeight: "600",
  },
  button: {
    width: "100%",
    height: "50px",
    marginTop: "18px",
    background: "#D60000",
    borderRadius: "5px",
    fontWeight: "600",
  },
  logo: {
    fontSize: "30px",
    marginRight: "22px",
  },
};

export default function ContainerProfile() {
  return (
    <div>
      <p
        style={{
          fontFamily: " Times New Roman",
          fontWeight: "bold",
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        Profile
      </p>
      <div
        className="d-flex justify-content-between"
        style={styles.containerProfile}
      >
        <div>
          <div
            className="d-flex align-items-center "
            style={{ marginBottom: "40px" }}
          >
            <div>
              <i class="bi bi-envelope-fill" style={styles.logo}></i>
            </div>
            <div>
              <label
                style={{
                  marginBottom: "9px",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                Egi Gans
              </label>
              <label style={{ color: "#8A8C90" }}>Email</label>
            </div>
          </div>
          <div
            className="d-flex align-items-center "
            style={{ marginBottom: "40px" }}
          >
            <div>
              <i class="bi bi-gender-ambiguous " style={styles.logo}></i>
            </div>
            <div>
              <label
                style={{
                  marginBottom: "9px",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                Male
              </label>
              <label style={{ color: "#8A8C90" }}>Gender</label>
            </div>
          </div>
          <div
            className="d-flex align-items-center "
            style={{ marginBottom: "40px" }}
          >
            <div>
              <i class="bi bi-telephone-fill" style={styles.logo}></i>
            </div>
            <div>
              <label
                style={{
                  marginBottom: "9px",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                0812-8623-8911
              </label>
              <label style={{ color: "#8A8C90" }}>Mobile phone</label>
            </div>
          </div>
          <div
            className="d-flex align-items-center "
            style={{ marginBottom: "40px" }}
          >
            <div>
              <i class="bi bi-geo-alt-fill" style={styles.logo}></i>
            </div>
            <div>
              <label
                style={{
                  marginBottom: "9px",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                Perumahan Permata Bintaro Residence C-3
              </label>
              <label style={{ color: "#8A8C90" }}>Address</label>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src={Profile}
              alt=""
              style={{
                width: "226.67px",
                display: "block",
                borderRadius: "4px",
              }}
            />
            <Button style={styles.button}>Edit Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
