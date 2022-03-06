import Pulang from "./Assets/pulang.jpeg";
import Wow from "./Assets/Wowsss.png";

import ListBookPremium from "./listBookPremium";

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

function HomeContentPremium() {
  return (
    <div>
      <div style={styles.containerJumbotron}>
        <img src={Wow} alt="" style={styles.title} />
        <img src={Pulang} alt="" style={styles.book} />
      </div>
      <ListBookPremium />
    </div>
  );
}

export default HomeContentPremium;
