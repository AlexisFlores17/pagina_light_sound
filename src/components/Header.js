import React from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";




const Header = ({ history}) => {

  return (
    <ReactNavbar
    className="navbar"
    color="rgb(25, 25, 25)"
    logo="https://svgshare.com/i/KHh.svg"
    menu={[
      { name: "Conocenos", to: "/" },
      { name: "Showreel", to: "/articles" },
      { name: "Contacto", to: "/about" },
    ]}
  />
  );
}

export default Header;
