import React, { useState } from "react";
import Header from "./Header";
import DisplayUser from "./User";
function Home(){
    const [isUserProfile, setIsUserProfile] = useState(false)
    function handleClick(){
        setIsUserProfile(true);
    }
    return(
        <div>
            <Header />
            <button onClick={handleClick}>my account</button>
            {isUserProfile ? <DisplayUser />: null}
        </div>
    )
}

export default Home;