import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import SuccessRegister from "./SuccessRegister";
import Home from "./Home";
function Entry() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/success" element={<SuccessRegister />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Entry;
