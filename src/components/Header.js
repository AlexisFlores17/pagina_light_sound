import React from "react";
import {  Link } from "react-router-dom";
;

const Header = ({ history}) => {

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">LSD LAB.</Link>
            </div>
          </div>
        </div>
      </div>
      
    </header>
    
  );
};

export default Header;
