import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import SuccessRegister from "./SuccessRegister";
import Home from "./Home";
import LoginError from "./LoginError";
function Entry() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    window.onbeforeunload = setIsLogin(true);
  }, []);
  function onlogin() {
    setIsLogin(true);
  }
  function onlogout() {
    setIsLogin(false);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onlogin={onlogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<SuccessRegister />} />
        <Route
          path="/home"
          element={isLogin ? <Home onlogout={onlogout} /> : <LoginError />}
        />
      </Routes>
    </div>
  );
}

export default Entry;
