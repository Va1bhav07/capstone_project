import React, { useState } from "react";
import CardComp from "../../../components/Cards";
import Card from "react-bootstrap/Card";
import LoginForm from "./LoginForm";
import SigninupLink from "../signinupLink";
import axios from "axios";
import "../authentication.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

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
        response?.status === 200 && navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="mt-5 card-comp p-4">
        <Card.Title className="text-center fs-2 mb-4">Sign In</Card.Title>
        <LoginForm
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          onFormSubmit={onFormSubmit}
        />
        <SigninupLink type={"signin"} />
      </CardComp>
    </section>
  );
}

export default Login;
