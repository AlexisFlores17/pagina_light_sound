import React from "react";
import { Navbar, Nav } from "react-bootstrap";




const Header2 = ({ history}) => {

  return (
    <div className= "header-navbar lax" data-lax-opacity="0 1, (vh/2) 0">
      <Navbar bg="none" expand="lg" variant="dark" className="navbar-container">
        <Navbar.Brand href="/#home">LSD LAB.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </div>
  );
}

export default Header2;
