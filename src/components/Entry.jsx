import React, { useState } from "react";
import shop from "./shop.JPG";
import HCL_logo from "./HCL_logo.svg";
import Login from "./login";
import Register from "./Register";
function Entry() {
  const [isNew, setIsNew] = useState(false);
  function changeIsNew(changedIsNew) {
    setIsNew(changedIsNew);
  }
  return (
    <div>
      <img className="left" src={shop} alt="woman shopping"></img>
      <div className="right">
        <img className="logo" src={HCL_logo} alt="HCL-logo"></img>
        <h1>Welcome to HCL Shopping portal</h1>
        <p>
          India's only shopping portal which allow free coupouns to their
          employees
        </p>
        <div>
          {isNew ? <Register isNewForReg = {true} changeIsNewForReg = {changeIsNew}/> : <Login isNewForLogin = {false} changeIsNewForLogin ={changeIsNew}/>}
        </div>
      </div>
    </div>
  );
}

export default Entry;
