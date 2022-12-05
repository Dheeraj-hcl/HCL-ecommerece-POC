import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import SuccessRegister from "./SuccessRegister";

function Entry() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/success" element={<SuccessRegister />} />
      </Routes>
    </div>
  );
}

export default Entry;
