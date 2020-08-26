import React from "react";
import { Navbar, Nav } from "react-bootstrap";




const Header = ({ history}) => {

  return (
    <div className= "header-navbar">
      <Navbar bg="none" expand="lg" variant="dark" className="navbar-container">
        <Navbar.Brand href="#home">LSD LAB.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" inline>
          <Nav className="mr-auto">
            <Nav.Link href="#conocenos-sect">Conocenos</Nav.Link>
            <Nav.Link href="#showreel-sect">Showreel</Nav.Link>
            <Nav.Link href="#contacto-sect">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
