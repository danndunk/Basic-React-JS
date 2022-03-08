import Image from "../../Assets/pulang.jpeg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const styles = {
  book: {
    width: "400px",
    height: "540px",
    borderRadius: "8px",
  },
  title: {
    fontWeight: "700",
    fontSize: "64px",
  },
  author: {
    fontSize: "24px",
    color: "#929292",
  },
  another: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  anotherOne: {
    color: "#929292",
    fontSize: "18px",
  },
  about: {
    fontWeight: "bold",
    fontSize: "36px",
  },
  detail: {
    color: "#929292",
    textAlign: "justify",
  },
};

function DetailBookInHome() {
  const navigate = useNavigate();

  const handleAddList = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  const handleReadBook = (e) => {
    e.preventDefault();
    navigate("/read-book");
  };
  return (
    <div style={{ width: "93%", marginBottom: "30px" }}>
      <div className="d-flex">
        <div>
          <img src={Image} alt="" style={styles.book} />
        </div>
        <div style={{ marginLeft: "54px" }}>
          <div style={{ marginBottom: "50px" }}>
            <p style={styles.title}>Test On The Road</p>
            <p style={styles.author}>Rachel Hartman</p>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <p style={styles.another}>Publication date</p>
            <p style={styles.anotherOne}>April 2020</p>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <p style={styles.another}>Pages</p>
            <p style={styles.anotherOne}>436</p>
          </div>
          <div>
            <p style={{ ...styles.another, color: "red" }}>ISBN</p>
            <p style={styles.anotherOne}>9781789807554</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "90px" }}>
        <p style={styles.about}>About This Book</p>
        <p style={styles.detail}>
          In the medieval kingdom of Goredd, women are expected to be ladies,
          men are their protectors, and dragons get to be whomever they want.
          Tess, stubbornly, is a troublemaker. You can’t make a scene at your
          sister’s wedding and break a relative’s nose with one punch (no matter
          how pompous he is) and not suffer the consequences. As her family
          plans to send her to a nunnery, Tess yanks on her boots and sets out
          on a journey across the Southlands, alone and ptending to be a boy.
          Where Tess is headed is a mystery, even to her. So when she runs into
          an old friend, it’s a stroke of luck. This friend is a quigutl—a
          subspecies of dragon—who gives her both a purpose and protection on
          the road. But Tess is guarding a troubling secret. Her tumultuous past
          is a heavy burden to carry, and the memories she’s tried to forget
          threaten to expose her to the world in more ways than one. Returning
          to the fascinating world she created in the award-winning and New York
          Times bestselling Seraphina, Rachel Hartman introduces readers to a
          new character and a new quest, pushing the boundaries of genre once
          again in this wholly original fantasy
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <Button onClick={handleReadBook}>Read Book</Button>
        </div>
        <div>
          <Button onClick={handleAddList}>Add Book</Button>
        </div>
      </div>
    </div>
  );
}

export default DetailBookInHome;
