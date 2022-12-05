import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation, gql } from "@apollo/client";

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

function Login(props) {
  const [isNew, setIsNew] = useState(props.isNewForLogin);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function changeIsNew() {
    setIsNew();
    props.changeIsNewForLogin(true);
  }

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result);
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
    <div>
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
          <p onClick={changeIsNew}>Create account</p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
