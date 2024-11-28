import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary mb-3"
      sticky="top"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Edo Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/artikli")}>Artikli</Nav.Link>
            <NavDropdown title="Kategorije" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Kategorija 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kategorija 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/artikli/novi-artikal")}>
              Objavi artikal
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/prijava")}>Prijavi se</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
