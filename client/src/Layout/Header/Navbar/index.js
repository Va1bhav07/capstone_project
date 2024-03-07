import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Navlinks from "./Navlinks";
import logoImage from "./../../../img/EduFlex.jpg"
import "../../../pages/Home/index.css"

function NavbarComp() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <Image src = {logoImage} alt = "Brand Logo"  roundedCircle className="" style={{height:"75px", width:"75px"}}/>
          <Col className="italic">EduFlex</Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navlinks />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
