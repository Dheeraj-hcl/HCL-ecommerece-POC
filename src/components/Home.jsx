import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import DisplayUser from "./User";
function Home(){
    const [isUserProfile, setIsUserProfile] = useState(false)
    const location = useLocation();
    function handleClick(){
        setIsUserProfile(true);
    }
    return(
        <div>
            <Header />
            <h1>Hi {location.state.fullName}</h1>
            <button onClick={handleClick}>my account</button>
            {isUserProfile ? <DisplayUser id={location.state.id}/>: null}
        </div>
    )
}

export default Home;