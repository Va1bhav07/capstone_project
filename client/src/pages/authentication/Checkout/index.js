import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import CardComp from "../../../components/Cards";
import Card from "react-bootstrap/Card";
import "../../Home/index.css"

function Checkout() {
  const [formDataState, setFormData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvvNumber: "",
    agreeTerms: false,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formDataState,
      [name]: value,
    });
  };

  const onFormSubmit = () => {
    console.log("Form Data:", formDataState);
    const url = "http://localhost:4000/checkout";
    if (!formDataState.fullName || !formDataState.email || !formDataState.cardNumber || !formDataState.expiry || !formDataState.cvvNumber || !formDataState.agreeTerms) {
      return console.log("Please fill in all the required fields.");
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
{/* <section>
      <CheckoutForm
        formDataState={formDataState}
        handleFormChange={handleFormChange}
        onFormSubmit={onFormSubmit}
      />
    </section>
 */}
  return (
    

 <section className="d-flex justify-content-center align-items-centerr">
      <CardComp className="mt-5 card-comp-width p-4 margin-bottom ">
        <Card.Title className=" fs-2 mb-4">Checkout</Card.Title>
        <CheckoutForm
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          onFormSubmit={onFormSubmit}
        />
      </CardComp>
    </section>

  );
}

export default Checkout;
