import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function LoginForm({ handleFormChange, onFormSubmit }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    onFormSubmit();
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
    >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
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

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter password"
            autoComplete="on"
            name="password"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default LoginForm;