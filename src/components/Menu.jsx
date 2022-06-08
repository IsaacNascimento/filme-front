import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/src/favicon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Filmes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/elencos">Elenco</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
