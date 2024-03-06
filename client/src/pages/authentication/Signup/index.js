import React from "react";
import SignupForm from "./SignupForm";
import CardComp from "../../../components/Cards";
import { useFormHook } from "../../../components/Form";
import SigninupLink from "../signinupLink";
import Card from "react-bootstrap/Card";
import "../authentication.css";
import { apiAxios } from "../../../utilities/axios";
import { useNavigate } from "react-router-dom";

const initialFvalue = {
  fullName: "",
  email: "",
  password: "",
};

function Signup() {
  const navigate = useNavigate();

  const { formDataState, handleFormChange } = useFormHook(initialFvalue);

  const onFormSubmit = async () => {
    console.log("fro :>> ", formDataState);
    const { fullName, email, password } = formDataState;
    const url = "/signup";
    if (!email || !password || !fullName) {
      return console.log("enter all values");
    }
    const response = await apiAxios.post(url, formDataState);
    response && navigate("/");
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
