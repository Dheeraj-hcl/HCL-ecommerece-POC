import React from "react";

function Register() {
  return (
    <div>
      <form>
        <label>Username</label>
        <input placeholder="enter your username" />
        <label>Password</label>
        <input placeholder="enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
