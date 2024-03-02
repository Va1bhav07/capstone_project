import React, { useState } from "react";
import SignupForm from "./SignupForm";
import CardComp from "../../../components/Cards";
import { useFormHook } from "../../../components/Form";
import SigninupLink from "../signinupLink";
import Card from "react-bootstrap/Card";
import "../authentication.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialFvalue = {
  fullName: "",
  email: "",
  password: "",
};

function Signup() {
  const navigate = useNavigate();

  const { formDataState, handleFormChange, setFormData } =
    useFormHook(initialFvalue);

  const onFormSubmit = () => {
    console.log("fro :>> ", formDataState);
    const { fullName, email, password } = formDataState;
    const url = "http://localhost:4000/signup";
    if (!email || !password || !fullName) {
      return console.log("enter all values");
    }
    axios
      .post(url, formDataState)
      .then(function (response) {
        console.log(response);
        response?.status === 201 && navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="mt-5 card-comp p-4">
        <Card.Title className="text-center fs-2 mb-4">Sign Up</Card.Title>
        <SignupForm
          handleFormChange={handleFormChange}
          onFormSubmit={onFormSubmit}
        />
        <SigninupLink type={"signup"} />
      </CardComp>
    </section>
  );
}

export default Signup;
