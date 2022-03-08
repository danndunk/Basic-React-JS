import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import LandingPage from "./component/page/landing";
import Home from "./component/page/home";
import Subscribe from "./component/page/subscribe";
import Profile from "./component/page/profile";
import AddBookPage from "./component/page/addBook";
import ReadBook from "./component/page/readBook";
import DetailBookInUserPage from "./component/page/detailBookInUserList";
import DetailBookInHomePage from "./component/page/detailBookInHomeList";
import ListTransactions from "./component/page/ListTransactions";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="/read-book" element={<ReadBook />} />
        <Route exact path="/add-book" element={<AddBookPage />} />
        <Route
          exact
          path="/detail-book-user"
          element={<DetailBookInUserPage />}
        />
        <Route
          exact
          path="/detail-book-list"
          element={<DetailBookInHomePage />}
        />
        <Route exact path="/list-transaction" element={<ListTransactions />} />
      </Routes>
    </Router>
  );
}

export default App;
