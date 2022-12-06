import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
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
      history("/home", { state: result.data.userLogin });
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
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image style={{ width: "150px", height: "35px" }} src={HCL_logo} />
          <h1 style={{fontWeight: "bold", color: "black"}}>Welcome to HCL Shopping portal</h1>
          <p style={{ color: "black"}}>
            India's only shopping portal which allow free coupouns to their
            employees
          </p>
        </Header>
        <Form
          size="large"
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              type="email"
              autoComplete="off"
              value={values.email}
              error={errors.email ? true : false}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              error={errors.password ? true : false}
              onChange={onChange}
            />
            <Button type="submit" color="blue" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        {Object.keys(errors).length > 0 && (
          <Message>
            {Object.keys(errors).length > 0 && (
              <div className="ui error message">
                <ul className="list">
                  {Object.values(errors).map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            )}
          </Message>
        )}
        <Message>
          New to us? <Link to="/register">Create account</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
