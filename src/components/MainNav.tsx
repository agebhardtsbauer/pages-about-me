import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const MainNav: React.FC = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
        >
          Alan Gebhardtsbauer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
            >
              Landing
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
