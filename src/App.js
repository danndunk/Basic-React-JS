import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import LandingPage from "./component/page/landingPage";
import Home from "./component/page/homePage";
import Profile from "./component/page/profilePage";
import Subscribe from "./component/page/subscribePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
      </Routes>
    </Router>

    // {isLogin ? <Home/> : <LandingPage/>}
  );
}

export default App;
