import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">LSD LAB.</Link>
            </div>
            <div className="links">              
                <a href="#conocenos-sect">
                  Conócenos       
                </a>  
                <a href="#showreel-sect">
                  Showreel       
                </a>  
                <a href="#contacto-sect">
                  Contacto       
                </a>                                                            
            </div>
          </div>
        </div>


        </div>
    )
}
