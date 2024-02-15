import React from "react";
import { FormComp, useFormHook } from "../../../../components/Form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../../Home/index.css"

function CheckoutForm({ onFormSubmit, handleFormChange }) {
  return (
    <FormComp onFormSubmit={onFormSubmit} handleFormChange={handleFormChange} >

        <h3 className="margin-top">Peronal inforamation</h3>
        
        <Row className="mb-3" > 
            <Form.Group as={Col} md={5} controlId="validationCustom01">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter full name"
                    name="fullName"
                />
                <Form.Control.Feedback type="invalid">
                    Please Enter full name.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md={5} controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                />
                <Form.Control.Feedback type="invalid">
                    Please Enter Email.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <h3 className="margin-top">Payment details</h3>
        
        <Row className="mb-3" >
            <Form.Group as={Col} md={5} controlId="validationCustom03">
                <Form.Label>Credit/Debit card number:</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter 16-digit card number"
                    name="cardNumber"
                    pattern="[0-9]{16}"
                />
                <Form.Control.Feedback type="invalid">
                    Please Enter a valid 16-digit credit/debit card number.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md={5} controlId="validationCustom04">
                <Form.Label>Valid through: (MMYY)</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Format(MMYY)"
                    name="cardNumber"
                    pattern="[0-9]{4}"
                />
                <Form.Control.Feedback type="invalid">
                    Please Enter a valid expiry in format MMYY.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md={5} controlId="validationCustom05">
                <Form.Label>CVV:</Form.Label>
                <Form.Control 
                    required
                    type="tel"
                    placeholder="3-digit security code on back of card"
                    name="cvvNumber"
                    pattern="[0-9]{3}"
                />
                <Form.Control.Feedback type="invalid">
                    Please Enter a valid 3-digit CVV number.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3">
            <Form.Check
                required        
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
            />
        </Form.Group>   
        <Button className="margin-bottom" type="submit">
            Submit form
        </Button>
    </FormComp>
  );
}

export default CheckoutForm;
