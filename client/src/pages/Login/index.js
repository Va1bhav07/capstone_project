import React, { useState, useEffect } from "react";
import CardComp from "../../components/Cards";
import Card from "react-bootstrap/Card";
import LoginForm from "./LoginForm";

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
