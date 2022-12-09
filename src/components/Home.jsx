import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import { Button, Icon } from "semantic-ui-react";
import "../App.css";
import Content from "./Content";
function Home(props) {
  const location = useLocation();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const myAccount = () => {
    setIsMyProfile(true);
  };
  const handleClick= ()=>{
    setIsMyProfile(false);
  }
  return (
    <div>
      <div>
        <Header data={location.state} onChecked={myAccount} />
        {isMyProfile ? (
          <>
            <Button basic onClick={handleClick} className="profile-button" icon labelPosition="left" >
              DashBoard
              <Icon name="left arrow" />
            </Button>
            <Profile onlogout={props.onlogout}/>
          </>
        ) : (
          <Content />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
