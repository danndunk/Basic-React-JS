// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";

// const styles = {
//   btnSign: {
//     width: "190px",
//     height: "50px",
//     borderRadius: "5px",
//     border: "none",
//     fontWeight: "600",
//     fontSize: "18px",
//   },
//   btnSignUp: {
//     backgroundColor: "#D60000",
//     marginRight: "31px",
//     color: "white",
//   },
//   btnSignIn: {
//     backgroundColor: "rgba(205, 205, 205, 0.7)",
//     color: "black",
//   },
// };

// const ButtonSign = () => {
//   const navigate = useNavigate();

//   const HandleSignUp = () => {
//     navigate("/signup");
//   };

//   const HandleSignIn = () => {
//     navigate("/signin");
//   };

//   return (
//     <div>
//       <Button
//         onClick={HandleSignUp}
//         style={{ ...styles.btnSign, ...styles.btnSignUp }}
//       >
//         Sign Up
//       </Button>
//       <Button
//         onClick={HandleSignIn}
//         style={{ ...styles.btnSign, ...styles.btnSignIn }}
//       >
//         Sign In
//       </Button>
//     </div>
//   );
// };

// export default ButtonSign;

import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import FormSignIn from "../form/formSignIn";

const styles = {
  btnSignIn: {
    width: "190px",
    height: "50px",
    borderRadius: "5px",
    border: "none",
    fontWeight: "600",
    fontSize: "18px",
    backgroundColor: "rgba(205, 205, 205, 0.7)",
    color: "black",
  },
};

const ButtonSignIn = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalShow(true)} style={styles.btnSignIn}>
        Sign In
      </Button>
      <FormSignIn show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default ButtonSignIn;
