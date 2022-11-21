import React, { useState } from "react";

function Login(props) {
  const [isNew, setIsNew] = useState(props.isNewForLogin);

  function changeIsNew() {
    setIsNew();
    props.changeIsNewForLogin(true);
  }

  return (
    <div>
      <form>
        <div className="from-inner">
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input placeholder="enter your username" type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input placeholder="enter your password" type="password" />
          </div>
          <button type="submit">Login in</button>
          <p>New Here?</p>
          <p onClick={changeIsNew}>Create account</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
