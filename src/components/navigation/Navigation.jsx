import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import logoImage from "../../assets/images/logo-dark.svg";
import { BiPlusCircle, BiLogInCircle, BiPackage } from "react-icons/bi";
import Search from "../search/Search";

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => setShow(false));
  const handleShow = useCallback(() => setShow(true));

  const navigateTo = useCallback((url) => {
    handleClose();
    navigate(url);
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary mb-3 shadow"
      sticky="top"
    >
      <Container>
        <Button
          variant="outline-info"
          className="d-lg-none"
          onClick={handleShow}
        >
          Ξ
        </Button>
        <Navbar.Brand
          className="d-lg-none ms-2 me-auto"
          onClick={() => navigateTo("/")}
        >
          <Image src={logoImage} alt="eStore logo" width="85px" />
        </Navbar.Brand>
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="lg"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image src={logoImage} alt="eStore logo" width="80px" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Brand
              className="d-none d-lg-block d-lg-flex align-items-center"
              onClick={() => navigateTo("/")}
            >
              <Image src={logoImage} alt="eStore logo" width="90px" />
            </Navbar.Brand>
            <Nav className="me-auto gap-2">
              <Nav.Link onClick={() => navigateTo("/artikli")}>
                <Stack direction="horizontal" gap="1">
                  <BiPackage />
                  Artikli
                </Stack>
              </Nav.Link>
              {/* <NavDropdown title="Kategorije" id="basic-nav-dropdown">
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
              </NavDropdown> */}
              <Nav.Link onClick={() => navigateTo("/artikli/novi-artikal")}>
                <Stack direction="horizontal" gap="1">
                  <BiPlusCircle />
                  Objavi artikal
                </Stack>
              </Nav.Link>
              <Nav.Link onClick={() => navigateTo("/prijava")}>
                <Stack direction="horizontal" gap="1">
                  <BiLogInCircle />
                  Prijavi se
                </Stack>
              </Nav.Link>
            </Nav>
            {/* </Navbar.Collapse> */}
          </Offcanvas.Body>
        </Offcanvas>
        <Search className="w-50" />
      </Container>
    </Navbar>
  );
};

export default Navigation;