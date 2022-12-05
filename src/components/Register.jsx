import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation, gql } from "@apollo/client";
import { Link, redirect } from "react-router-dom";
import HCL_logo from "./HCL_logo.svg";
const REGISTER_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $password: String!
  ) {
    userRegister(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      email: $email
      password: $password
    ) {
      id
      fullName
      email
      phoneNumber
    }
  }
`;

function Register(props) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result.data.userRegister);
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors[0].errors);
    },
    variables: values,
  });

  function onSubmit(event) {
    event.preventDefault();
    addUser();
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
            label="First Name"
            placeholder="First Name"
            name="firstName"
            type="text"
            value={values.firstName}
            error={errors.firstName ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={values.lastName}
            error={errors.lastName ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Phone Number"
            placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            value={values.phoneNumber}
            error={errors.phoneNumber ? true : false}
            onChange={onChange}
          />
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
          <Button type="submit">Sign Up</Button>
          {Object.keys(errors).length > 0 && (
            <div>
              <ul>
                {Object.values(errors).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
          <p>Already have an account?</p>
          <Link to="/">Login</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
