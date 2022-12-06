import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
function Home() {
  const location = useLocation();
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header data={location.state} />
        <h1>Hi {location.state.fullName}</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
