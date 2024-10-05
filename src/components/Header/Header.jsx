import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function Header() {
  return (
    <Navbar expand="lg" style={{ background: "#000000" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#F5F5F7" }}>
          Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/'} className="nav-link" style={{ color: "#F5F5F7" }}>
              Home
            </Link>
            <Link to={'/account'} className="nav-link" style={{ color: "#F5F5F7" }}>
              Account
            </Link>
            <Link to={'/cart'} className="nav-link" style={{ color: "#F5F5F7" }}>
              Cart
            </Link>
            <Link to={'/wishlist'} className="nav-link" style={{ color: "#F5F5F7" }}>
              Wishlist
            </Link>
            <Link to={'/orders'} className="nav-link" style={{ color: "#F5F5F7" }}>
              Orders
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
