import { useState, useCallback } from "react";
import {
  Form,
  NavLink,
  useNavigate,
  useLoaderData,
  useRevalidator,
  Link,
} from "react-router-dom";
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
import {
  BiHomeAlt2,
  BiPlusCircle,
  BiLogInCircle,
  BiPackage,
  BiMenu,
} from "react-icons/bi";
import Search from "../search/Search";

const Navigation = () => {
  const token = useLoaderData("wrapperComponent");
  const navigate = useNavigate();

  const revalidator = useRevalidator();
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => setShow(false));
  const handleShow = useCallback(() => setShow(true));

  const navigateTo = useCallback((url) => {
    handleClose();
    navigate(url);
  });

  const tokenRemovalHandler = () => {
    localStorage.removeItem("userAndToken");
    revalidator.revalidate();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary mb-3 shadow"
        sticky="top"
      >
        <Container>
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
              <Nav className="me-auto gap-2 w-auto">
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
                <Nav.Link
                  onClick={() => navigateTo("/artikli/novi-artikal")}
                  hidden={!token}
                >
                  <Stack direction="horizontal" gap="1">
                    <BiPlusCircle />
                    Objavi artikal
                  </Stack>
                </Nav.Link>
                <Nav.Link hidden={token} onClick={() => navigateTo("/prijava")}>
                  <Stack direction="horizontal" gap="1">
                    <BiLogInCircle />
                    Prijavi se
                  </Stack>
                </Nav.Link>
                <Nav.Link hidden={!token} onClick={tokenRemovalHandler}>
                  <Stack direction="horizontal" gap="1">
                    <BiLogInCircle />
                    Logout
                  </Stack>
                </Nav.Link>
              </Nav>
              {/* </Navbar.Collapse> */}
            </Offcanvas.Body>
          </Offcanvas>
          <Search className="w-50" />
        </Container>
      </Navbar>
      <div className="position-fixed bottom-0 w-100 bg-white border shadow z-3 d-sm-block d-lg-none">
        <Stack direction="horizontal">
          <Link
            to="/artikli"
            className="m-auto d-flex flex-column align-items-center py-2 text-decoration-none text-dark"
          >
            <BiHomeAlt2 className="fs-5" />
            <div className="">eStore</div>
          </Link>
          <Link
            to="/artikli"
            className="m-auto d-flex flex-column align-items-center py-2 text-decoration-none text-dark"
          >
            <BiPackage className="fs-5" />
            <div className="">Products</div>
          </Link>
          {token ? (
            <Link
              to="/artikli/novi-artikal"
              className="m-auto d-flex flex-column align-items-center py-2 text-decoration-none text-dark"
            >
              <BiPlusCircle className="fs-5" />
              <div className="">Add</div>
            </Link>
          ) : (
            <Link
              to="/prijava"
              className="m-auto d-flex flex-column align-items-center py-2 text-decoration-none text-dark"
            >
              <BiLogInCircle className="fs-5" />
              <div className="">Login</div>
            </Link>
          )}
          <Link
            onClick={handleShow}
            className="m-auto d-flex flex-column align-items-center py-2 text-decoration-none text-dark"
          >
            <BiMenu className="fs-4 text-dark" />
            Menu
          </Link>
        </Stack>
      </div>
    </>
  );
};

export default Navigation;
