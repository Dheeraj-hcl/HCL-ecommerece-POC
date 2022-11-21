import React, { useState } from "react";

function Register(props) {
  const [isNew, setIsNew] = useState(props.isNewForReg);

  function changeIsNew() {
    setIsNew(false);
    props.changeIsNewForReg(false);
  }

  return (
    <div>
      <form>
        <div className="from-inner">
          <div className="form-group">
            <label>Username</label>
            <input placeholder="enter your username" type="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input placeholder="enter your password" type="password" />
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account?</p>
          <p onClick={changeIsNew}>Login</p>
        </div>
      </form>
    </div>
  );
}

export default Register;
