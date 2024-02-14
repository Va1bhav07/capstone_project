import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";

function Main({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Main;
