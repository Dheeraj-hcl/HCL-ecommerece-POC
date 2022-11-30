import React, { useState } from "react";
import HCL_logo from "./HCL_logo.svg";
import Login from "./login";
import Register from "./Register";
import Home from "./Home";
function Entry() {

  const [isNew, setIsNew] = useState(false);

  function changeIsNew(changedIsNew) {
    setIsNew(changedIsNew);
  }

  return (
    <div>
      
      <div >
        <img className="logo" src={HCL_logo} alt="HCL-logo"></img>
        <h1>Welcome to HCL Shopping portal</h1>
        <p>
          India's only shopping portal which allow free coupouns to their
          employees
        </p>
        <div>
          {isNew ? <Register isNewForReg = {true} changeIsNewForReg = {changeIsNew}/> : <Login isNewForLogin = {false} changeIsNewForLogin ={changeIsNew}/>}
        </div>
        <Home />
      </div>
    </div>
  );
}

export default Entry;
