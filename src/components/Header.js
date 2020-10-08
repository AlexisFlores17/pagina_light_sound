import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";





const Header = ({ history}) => {
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className= "header-navbar lax" data-lax-opacity="0 1, (vh/2) 0">
      <Navbar bg="none" expand="lg" variant="dark" className="navbar-container">
        <Navbar.Brand href="/#home">LSD LAB.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => gsap.to(window, {duration: 0.1, scrollTo:"#conocenos-sect"})}>Conocenos</Nav.Link>
            <Nav.Link onClick={() => gsap.to(window, {duration: 0.1, scrollTo:"#showreel-sect"})}>Showreel</Nav.Link>
            <Nav.Link onClick={() => gsap.to(window, {duration: 0.1, scrollTo:"#contacto-sect"})}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
