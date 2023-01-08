import React, { useState }  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  const [isRussian, setIsRussian] = useState(true)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NPM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{isRussian ? "Главная" : "Home"}</Nav.Link>
            <Nav.Link href="#pricing">{isRussian ? "Галлерея" : "Gallery"}</Nav.Link>
            <NavDropdown title={isRussian ? "Продукция" : "Product"} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{isRussian ? "Немецкие" : "German"}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              {isRussian ? "Американские" : "American"}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{isRussian ? "Японские" : "Japanese"}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              {isRussian ? "Другие..." : "Another..."}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{isRussian ? "О нас" : "About"}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {isRussian ? "Контакты" : "Contacts"}
            </Nav.Link>
            <select onChange={(event)=>(event.currentTarget.value === "ru" ? setIsRussian(true) : setIsRussian(false))}>
              <option value="ru">ru</option>
              <option value="eng">eng</option>
            </select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;