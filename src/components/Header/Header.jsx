import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  return (
    <Navbar expand="lg" style={{ background: "#B7B7B7" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#F5F5F7" }}>
          Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#F5F5F7" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "#F5F5F7" }}>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
