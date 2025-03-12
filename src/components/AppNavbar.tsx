import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              Home
            </Nav.Link>
            <NavDropdown title="Playground" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/playground/api-tests">
                Api
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/playground/css">
                CSS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
