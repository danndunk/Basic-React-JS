import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import LandingPage from "./component/page/landing";
import Home from "./component/page/home";
import Subscribe from "./component/page/subscribe";
import Profile from "./component/page/profile";
import AddBookPage from "./component/page/addBook";
import ReadBook from "./component/page/readBook";
import EditBook from "./component/page/editBook";
import DetailBookInUserPage from "./component/page/detailBookInUserList";
import DetailBookInHomePage from "./component/page/detailBookInHomeList";
import ListTransactions from "./component/page/ListTransactions";
import FormProfile from "./component/componentPage/form/formEditProfile";
import ListBookAdmin from "./component/page/listBookAdmin";

import { API, setAuthToken } from "./component/config/api";
import { UserContext } from "./component/context/userContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (!state.isLogin) {
      navigate("/");
    } else {
      if (state.user.role === "admin") {
        navigate("/list-transaction");
      } else if (state.user.role === "user") {
        navigate("/home");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      return dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="/add-book" element={<AddBookPage />} />
        <Route exact path="/read-book/:id" element={<ReadBook />} />
        <Route exact path="/edit-book/:id" element={<EditBook />} />
        <Route exact path="/edit-profile" element={<FormProfile />} />
        <Route exact path="/list-books" element={<ListBookAdmin />} />

        <Route
          exact
          path="/detail-book-user/:id"
          element={<DetailBookInUserPage />}
        />
        <Route
          exact
          path="/detail-book-list/:id"
          element={<DetailBookInHomePage />}
        />
        <Route exact path="/list-transaction" element={<ListTransactions />} />
      </Routes>
    </div>
  );
}

export default App;
