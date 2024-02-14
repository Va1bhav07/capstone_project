import React, { useState } from "react";
import CardComp from "../../components/Cards";
import Card from "react-bootstrap/Card";
import LoginForm from "./LoginForm";
import axios from "axios";

function Login() {
  const [formDataState, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formDataState,
      [name]: value,
    });
  };

  const onFormSubmit = () => {
    console.log("fro :>> ", formDataState);
    const { email, password } = formDataState;
    const url = "http://localhost:4000/login";
    if (!email || !password) {
      return console.log("enter all values");
    }

    axios
      .post(url, formDataState)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <CardComp>
      <Card.Title>Sign In</Card.Title>
      <LoginForm
        setFormData={setFormData}
        handleFormChange={handleFormChange}
        onFormSubmit={onFormSubmit}
      />
    </CardComp>
  );
}

export default Login;
