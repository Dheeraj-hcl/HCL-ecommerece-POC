import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import "../App.css";
import Content from "./Content";
function Home() {
  const location = useLocation();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const myAccount = () => {
    console.log(location.state);
    setIsMyProfile((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div>
      <div>
        <Header data={location.state} onChecked={myAccount} />
        {isMyProfile ? <Profile /> : <Content />}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
