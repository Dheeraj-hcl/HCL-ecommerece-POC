import React from "react";

function Login() {
  return (
    <div>
      <form>
        <label>Username</label>
        <input placeholder="enter your username" type="email" nam />
        <label>Password</label>
        <input placeholder="enter your password" type="password" />
        <button type="submit">Login in</button>
      </form>
    </div>
  );
}

export default Login;
