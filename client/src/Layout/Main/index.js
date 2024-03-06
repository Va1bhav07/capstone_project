import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";

function Main({ children }) {
  return (
    <div class="min-vh-100 d-flex flex-column">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

export default Main;
