import React from "react";
import CardComp from "../../../components/Cards";
import Card from "react-bootstrap/Card";
import { useFormHook } from "../../../components/Form";
import LoginForm from "./LoginForm";
import SigninupLink from "../signinupLink";
import { apiAxios } from "../../../utilities/axios";
import "../authentication.css";
import { useNavigate } from "react-router-dom";

const initialFvalue = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const { formDataState, handleFormChange } = useFormHook(initialFvalue);

  const onFormSubmit = async () => {
    console.log("fro :>> ", formDataState);
    const { email, password } = formDataState;
    const url = "/login";
    if (!email || !password) {
      return console.log("enter all values");
    }

    const response = await apiAxios.post(url, formDataState);
    response && navigate("/");

    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="mt-5 card-comp p-4">
        <Card.Title className="text-center fs-2 mb-4">Sign In</Card.Title>
        <LoginForm
          handleFormChange={handleFormChange}
          onFormSubmit={onFormSubmit}
        />
        <SigninupLink type={"signin"} />
      </CardComp>
    </section>
  );
}

export default Login;
