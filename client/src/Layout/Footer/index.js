import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import iconCopyright from "../../img/icon-copyright.png"
import NavbarComp from "../Header/Navbar";
import iconYoutube from "../../img/icon-youtube.png"
import iconInstagram from "../../img/icon-instagram.png"
import iconFacebook from "../../img/icon-facebook.png"
import iconLinkedin from "../../img/icon-linkedin.png"
import Nav from "react-bootstrap/Nav"
import "../../pages/Home/index.css"

function Footer() {
  return (
    <>
    <footer className="bg-dark text-light">
    <Container>
        <Row>
          <Col>
            <h3 className="margin-top">Adrress</h3>
            <p>299 Doon Valley Dr,</p><p> Kitchener, </p><p>ON N2G 4M4</p>
          </Col>

          <Col >
            <h3 className="margin-top">Contact Us</h3>
            <p>Email: eduflex@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>

          <Col className>
            <h3 className="margin-top">Quick Links</h3>
            <Nav className="me-auto">
              <ul className="list-unstyled text-right">
                <li><Nav.Link className="text-white text-right" href="/">Home</Nav.Link></li>
                <li><Nav.Link className="text-white" href="/login">Login</Nav.Link></li>
                <li><Nav.Link className="text-white" href="/checkout">Checkout Form</Nav.Link></li>
              </ul>
            </Nav>
          </Col>
        </Row>

        <Row className="text-center">
          <Col sm={4}>
            <p className="margin-top">
              EduFlex
              <Image className="icon-copyright" src={iconCopyright} alt="copyright-icon-EduFlex" />
              2023. All rights reserved.
            </p>
          </Col>

          <Col sm={6}>
            <Row>
              <Col>
                <p className="margin-top">Visit us on :</p>
              </Col>
              <Col>
              <a href="#youtube-handle" target="_self" rel="noopener noreferrer">
                <Image src={iconYoutube} alt="youtube-icon" width={"20px"} height={"20px"} className="margin-top"/>
              </a>
              </Col>
              
              <Col>
              <a href="#instagram-handle" target="_self" rel="noopener noreferrer">
                <Image src={iconInstagram} alt="instagram-icon" width={"20px"} height={"20px"} className="margin-top"/> 
              </a>
              </Col>

              <Col>
              <a href="#facebook-handle" target="_self" rel="noopener noreferrer">
                <Image src={iconFacebook} alt="facebook-icon" width={"20px"} height={"20px"} className="margin-top"/> 
              </a>
              </Col>

              <Col>
              <a href="#linkedin-handle" target="_self" rel="noopener noreferrer">
                <Image src={iconLinkedin} alt="linkedin-icon" width={"20px"} height={"20px"} className="margin-top"/>
              </a>
              </Col>            
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
  );
}

export default Footer;
