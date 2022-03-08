import Pulang from "../../Assets/pulang.jpeg";
import Wow from "../../Assets/Wowsss.png";

import ListBookHome from "../listBook/home/listBook";
import ListBookHomePremium from "../listBook/home/listBookPremium";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const styles = {
  containerJumbotron: {
    display: "flex",
    width: "1050px",
    height: "443px",
    boxShadow: "0px 0px 15px #999999",
    backgroundColor: "#FFD9D9",
    borderRadius: "10px",
    border: "none",
  },
  title: {
    margin: "auto 26px auto 58px",
    height: "70%",
  },
  book: {
    margin: "auto 72px auto 0px",
    height: "80%",
    borderRadius: "10px",
  },
};

function HomeContent() {
  const [state, _] = useContext(UserContext);
  return (
    <div>
      <div style={styles.containerJumbotron}>
        <img src={Wow} alt="" style={styles.title} />
        <img src={Pulang} alt="" style={styles.book} />
      </div>
      {state.isSub ? <ListBookHomePremium /> : <ListBookHome />}
    </div>
  );
}

export default HomeContent;
