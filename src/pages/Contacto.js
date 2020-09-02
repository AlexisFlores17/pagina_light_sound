import React from 'react'
import Fade from "react-reveal/Fade";
// import { Link } from 'react-router-dom'

// function scrollTop () {

//     window.scroll(0,0);

// }

export const Contacto = () => {
    return (
        <div className='showreel-container'>
            <div id="contacto-left"  className="contacto-div" >
                <h1>
                    Hagamos algo juntos
                </h1>
                <h5 id="texto2">
                    ¿Tienes algún desafío creativo para nosotros?
                    <br></br>
                    <br></br>
                    Nos encantaría escucharlo
                </h5>
                
            </div>
                
            <div id="contacto-right" className="contacto-div" >
                <div className='contacto-div-top'>
                    
                    <div className='contacto-quote rounded col-12' >
                        <Fade top delay={1000} >"El arte desafía a la tecnología y la tecnología inspira al arte"</Fade>
                        <br/>
                        <Fade top delay={2000} >-John Lasseter.</Fade>
                    </div>
                </div>	
            </div>
        </div>
    )
}
