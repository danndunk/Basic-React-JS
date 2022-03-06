// import { Container, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import cssModules from "./sign.module.css";

// const styles = {
//   formSignUp: {
//     width: "416px",
//     height: "479px",
//   },
// };

// function FormSignUp() {
//   const navigate = useNavigate();

//   const HandleButtonLogin = () => {
//     navigate("/home");
//   };
//   return (
//     <Container fluid>
//       <div className={cssModules.containerForm} style={styles.formSignUp}>
//         <Form>
//           <p className={cssModules.title}>Sign Up</p>
//           <Form.Control
//             className={cssModules.input}
//             type="email"
//             placeholder="Email"
//           />
//           <Form.Control
//             className={cssModules.input}
//             type="password"
//             placeholder="Password"
//           />
//           <Form.Control
//             className={cssModules.input}
//             type="text"
//             placeholder="Full Name"
//           />
//           <Button
//             onClick={HandleButtonLogin}
//             className={cssModules.btnSign}
//             type="submit"
//           >
//             Sign Up
//           </Button>
//           <Link to="/signin" className={cssModules.link}>
//             Don't have an account ? Klik <strong>Here</strong>
//           </Link>
//         </Form>
//       </div>
//     </Container>
//   );
// }

// export default FormSignUp;

import { Form, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// import { useNavigate } from "react-router-dom";
import cssModules from "./sign.module.css";

const styles = {
  formSignIn: {
    width: "416px",
    height: "408px",
  },
};

function FormSignIn(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    isLogin: false,
    user: {
      email: "",
      password: "",
    },
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    setState({
      isLogin: true,
      user: {
        email,
        password,
      },
    });
    navigate("/home");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={cssModules.containerForm} style={styles.formSignIn}>
        <Form onSubmit={handleOnSubmit}>
          <p className={cssModules.title}>Sign In</p>
          <Form.Control
            className={cssModules.input}
            onChange={handleOnChange}
            id="email"
            value={state.email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Form.Control
            className={cssModules.input}
            onChange={handleOnChange}
            value={state.password}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button className={cssModules.btnSign} type="submit">
            Sign In
          </Button>
          <Link to="/" className={cssModules.link}>
            Don't have an account ? Klik <strong>Here</strong>
          </Link>
        </Form>
      </div>
    </Modal>
  );
}

export default FormSignIn;
