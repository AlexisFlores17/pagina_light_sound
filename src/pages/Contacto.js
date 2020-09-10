import React, {useRef, useEffect} from 'react'
import Fade from "react-reveal/Fade";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phone from '../images/contacto2.png'
// import { Link } from 'react-router-dom'

// function scrollTop () {

//     window.scroll(0,0);

// }

export const Contacto = () => {
    gsap.registerPlugin(ScrollTrigger);
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let contacto = useRef(null)
    


    useEffect(() => {
        
        staggertext(line1, line2, line3)

    },[])

    const staggertext = (l1, l2, l3) => {
        gsap.from([l1, l2, l3], {
            scrollTrigger: {
                trigger: l1,
                toggleActions: "restart none none none",         
            },   
            
            duration:1,
            delay: 0.1,
            y:100,
            ease: 'power2.inOut',
            stagger:{
                amount: 0.4
            }
        })

    }


    return (
        <div className='contacto-container'>

 
            <div className="contacto-div">
                <div id="contacto-left" ref={el => contacto = el} className="col-xl-6">
                        <h1 className="contacto-titulo col-12" ref={ el => line1 = el}>
                            Hagamos algo juntos
                        </h1>
                        <h5 className="contacto-texto col-12" >
                            <div>
                                <div ref= {el => line2 = el}>¿Tienes algún desafío creativo para nosotros?</div>
                                <br></br>
                                <br></br>
                                <div ref= {el => line3 = el}>Nos encantaría escucharlo</div>
                            </div>
                        </h5>
                        <br></br>
                        <div id="contacto-animacion" >
            
                            
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
                <div id="contacto-right" className="col-xl-6" >
                    <img id="imagen" src={phone}  alt="imagen-contacto" />
                    <div className='contacto-quote rounded col-xl-10' >
                        <Fade top delay={1000} >"El arte desafía a la tecnología y la tecnología inspira al arte"</Fade>
                        <br/>
                        <Fade top delay={2000} >-John Lasseter.</Fade>
                    </div>
                    
                </div> 

                <div id="contacto-left-movil" ref={el => contacto = el} className="col-xl-6">
                    
                        <h1 className="contacto-titulo-movil col-12" ref={ el => line1 = el}>
                            Hagamos algo juntos
                        </h1>
                        <h5 className="contacto-texto-movil col-12" >
                            <div>
                                <div ref= {el => line2 = el}>¿Tienes algún desafío creativo para nosotros?</div>
                                <br></br>
                                <br></br>
                                <div ref= {el => line3 = el}>Nos encantaría escucharlo</div>
                            </div>
                        </h5>
                    <br></br>
                    <div id="contacto-animacion" >
        
                        
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
            </div>
        </div>
    )
}
