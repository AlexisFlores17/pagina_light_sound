import React from "react";
import { Navbar, Nav } from "react-bootstrap";




const Header2 = ({ history}) => {

  return (
    <div className= "header-navbar">
      <Navbar bg="none" expand="lg" variant="dark" className="navbar-container">
        <Navbar.Brand href="/#home">LSD LAB.</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header2;
