import React from 'react'
import Fade from "react-reveal/Fade";
// import { Link } from 'react-router-dom'

// function scrollTop () {

//     window.scroll(0,0);

// }

export const Contacto = () => {
    return (
        <div className='contacto-container'>
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
                

                <div className="col-sm" id="contacto-animacion">
                    <p className="contact">
                        <a href="tel:+52 1 55 2746 0988" rel="noopener noreferrer" target="_blank" id="numero-animar">+52 1 55 2746 0988</a>
                        <br/>
                        <a href="mailto:contacto@lsd.com.mx" rel="noopener noreferrer" target="_blank" id="correo-animar">contacto@lsdlab.com.mx</a>
                    </p>
                                            
                    <h5 className="siguenos">Síguenos</h5>

                    <div className="social-icons">   
                        <a href="https://www.instagram.com/lab_lsd/" rel="noopener noreferrer" target="_blank">
                            <div className="icon">
                                <span className="icon-text">IG</span>
                            </div>
                        </a>  

                        <a href="https://www.facebook.com/lab.lsd" rel="noopener noreferrer" target="_blank">
                            <div className="icon">
                                <span className="icon-text">FB</span>
                            </div>
                        </a>

                        <a href="https://twitter.com/lab_lsd" rel="noopener noreferrer" target="_blank">
                            <div className="icon">
                                <span className="icon-text">TW</span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/company/light-sound-disruptive-lab" rel="noopener noreferrer" target="_blank">
                            <div className="icon">
                                <span className="icon-text">LKD</span>
                            </div>
                        </a>                
                    </div>
                </div>               
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
