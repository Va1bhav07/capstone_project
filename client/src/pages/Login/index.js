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
    const url = "http://localhost:4000/test";
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

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formDataState),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Response data:", data);
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with your fetch operation:", error);
    //   });
  };

  return (
    <CardComp>
      <Card.Title>Sign In</Card.Title>
      <LoginForm
        formDataState={formDataState}
        setFormData={setFormData}
        handleFormChange={handleFormChange}
        onFormSubmit={onFormSubmit}
      />
    </CardComp>
  );
}

export default Login;
