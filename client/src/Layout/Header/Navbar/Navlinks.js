import React from "react";
import Nav from "react-bootstrap/Nav";

function Navlinks() {
  return (
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  );
}

export default Navlinks;
