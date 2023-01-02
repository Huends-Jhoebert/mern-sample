import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            GoalSetter
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <FaSignInAlt /> Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <FaUser /> Register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header className="header">
    //   <div className="logo">
    //     <Link to="/">GoalSetter</Link>
    //   </div>
    //   <ul>
    //     <li>
    //       <Link to="/login">
    //         <FaSignInAlt /> Login
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/register">
    //         <FaUser /> Register
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
  );
}

export default Header;
