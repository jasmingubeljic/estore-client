import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const navigate = useNavigate();
  const activeLink = ({ isActive }) =>
    isActive ? classes.isActive : undefined;

  //   return (
  //     <header>
  //       <nav>
  //         <ul className="d-flex gap-5 p-5">
  //           {/* <li>
  //                   <NavLink
  //                       to="/"
  //                       className={activeLink}
  //                       end
  //                   >
  //                       Home
  //                   </NavLink>
  //               </li> */}
  //           <li>
  //             <NavLink to="/artikli" className={activeLink} end>
  //               Products
  //             </NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/artikli/novi-artikal" className={activeLink} end>
  //               Novi Artikal
  //             </NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/prijava" className={activeLink} end>
  //               Login
  //             </NavLink>
  //           </li>
  //         </ul>
  //       </nav>
  //     </header>
  //   );
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
