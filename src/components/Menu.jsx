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
            <Nav.Link href="/clientes">Cliente</Nav.Link>
            <Nav.Link href="/filmes/clientes">Filmes & Clientes</Nav.Link>
            <Nav.Link href="/categorias">Categorias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
