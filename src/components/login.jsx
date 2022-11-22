import React, { useState, useEffect } from "react";

function Login(props) {
  const [isNew, setIsNew] = useState(props.isNewForLogin);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function changeIsNew() {
    setIsNew();
    props.changeIsNewForLogin(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  function validate(values) {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
     }
    //  else if( !regex.test(values.email)){
    //   errors.email = "Please enter a valid email";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="from-inner">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              placeholder="enter your Email"
              type="email"
              onChange={handleChange}
              value={formValues.email}
            />
            <p>{formErrors.email}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              placeholder="enter your password"
              type="password"
              onChange={handleChange}
              value={formValues.password}
            />
            <p>{formErrors.password}</p>
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
