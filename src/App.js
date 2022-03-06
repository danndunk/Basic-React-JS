import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import LandingPage from "./component/page/landingPage";
import Home from "./component/page/homePage";
import Subscribe from "./component/page/subscribePage";
import HomePremium from "./component/page/homePremium";
import ProfilePremium from "./component/page/profilePremium";
import Book from "./component/page/book";
import FormAddBook from "./component/formAddBook";
import DetailBookPage from "./component/page/detailBookPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="/home-premium" element={<HomePremium />} />
        <Route exact path="/profile-premium" element={<ProfilePremium />} />
        <Route exact path="/read-book" element={<Book />} />
        <Route exact path="/form-add-book" element={<FormAddBook />} />
        <Route exact path="/detail-book" element={<DetailBookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
