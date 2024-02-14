import React, { useState } from "react";
import SignupForm from "./SignupForm";
import CardComp from "../../components/Cards";
import Card from "react-bootstrap/Card";
import axios from "axios";

// const initialFvalue = {
//   fullName: "",
//   email: "",
//   password: "",
// };

function Signup() {
  const [formDataState, setFormData] = useState();

  const onFormSubmit = () => {
    // console.log("fro :>> ", formDataState);
    // const { email, password } = formDataState;
    // const url = "http://localhost:4000/login";
    // if (!email || !password) {
    //   return console.log("enter all values");
    // }
    // axios
    //   .post(url, formDataState)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <CardComp>
      <Card.Title>Sign Up</Card.Title>
      <SignupForm
        // setFormData={setFormData}
        // handleFormChange={handleFormChange}
        onFormSubmit={onFormSubmit}
      />
    </CardComp>
  );
}

export default Signup;
