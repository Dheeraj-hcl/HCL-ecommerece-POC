import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation, gql } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import HCL_logo from "./HCL_logo.svg";
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      id
      fullName
      email
      phoneNumber
    }
  }
`;

function Login() {
  const history = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result.data.userLogin);
      history('/home',{state: result.data.userLogin})
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors[0].errors);
    },
    variables: values,
  });

  function onSubmit(event) {
    event.preventDefault();
    loginUser();
  }

  return (
    <div className="form-container">
      <img className="logo" src={HCL_logo} alt="HCL-logo"></img>
      <h1>Welcome to HCL Shopping portal</h1>
      <p>
        India's only shopping portal which allow free coupouns to their
        employees
      </p>
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <div>
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            value={values.email}
            error={errors.email ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={values.password}
            error={errors.password ? true : false}
            onChange={onChange}
          />
          <Button type="submit">Log In</Button>
          {Object.keys(errors).length > 0 && (
            <div>
              <ul className="list">
                {Object.values(errors).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
          <p>New Here?</p>
          <Link to="/register">Create account</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
