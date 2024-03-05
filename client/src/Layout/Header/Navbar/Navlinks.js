import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../services/actions/authActions";

function Navlinks() {
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.authReducer);
  const handleNavSelect = (eventKey) => {
    if (eventKey === "logout") {
      dispatch(logoutAction());
    }
  };

  return (
    <Navbar.Collapse id="basic-navbar-nav" className="">
      <Nav className="justify-content-center flex-grow-1">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
      </Nav>
      {/* <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Nav onSelect={handleNavSelect}>
        {!authData.isLoggedIn ? (
          <>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link eventKey="logout">Logout</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar.Collapse>
  );
}

export default Navlinks;
