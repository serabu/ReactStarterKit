import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Layout() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">KakToTak</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link href="/">Main</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Components" id="collasible-nav-dropdown">
                <LinkContainer to="Slider">
                  <NavDropdown.Item>Slider</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="Canvas">
                  <NavDropdown.Item>Canvas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="TestPage">
                  <NavDropdown.Item>TestPage</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
            <LinkContainer to="Form">
                <Nav.Link href="Form">Registration</Nav.Link>
              </LinkContainer>
              <LinkContainer to="UserList">
                <Nav.Link href="UserList">List of users</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
    
  );
}

export default Layout;
