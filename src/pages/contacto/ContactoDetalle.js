import React from "react";
import contactoImg from '../../images/contacto.jpg';
import imgContacto from '../../images/distur.jpeg';
import Reveal from "react-reveal/Fade";
import Fade from "react-reveal/Fade";

export const ContactoDetalle = () => {
    return (    
        <Reveal effect="fadeindown" duration={2000}>
            <div className='col-12'>
                <div className='contacto-div-top'>
                    <img className='contacto-img-top img-fluid' src ={contactoImg} alt='contacto' />
                    <div className='contacto-quote rounded col-12' >
                        <Fade top delay={1000} >"El arte desafía a la tecnología y la tecnología inspira al arte"</Fade>
                        <br/>
                        <Fade top delay={2000} >-John Lasseter.</Fade>
                    </div>
                </div>		
                <div className='contacto-content col-12'>
    
                    <div className='contacto-info col-sm-6 col-xl-6'>
    
                        <div className='text-xl mb-5'>Hagamos de tu sueño un proyecto juntos</div>
    
                        <div className='text-md-left'>
                            Sit id do irure enim adipisicing laboris proident. Eiusmod eu ea Lorem nostrud ut aute adipisicing ea nisi pariatur reprehenderit eiusmod. Officia occaecat nulla ullamco dolor duis. Excepteur anim non est deserunt id adipisicing est tempor proident ut nostrud eiusmod irure.
                            Proident ullamco fugiat nisi eu sunt Lorem ex esse incididunt. Incididunt aute consequat occaecat occaecat adipisicing irure nisi reprehenderit dolore incididunt non ipsum. Dolore eiusmod magna excepteur voluptate deserunt occaecat esse nulla fugiat occaecat ex adipisicing aliquip.
                        </div>
    
                        <div className="social-icons-contacto">   
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
                    <div className="contacto-img col-sm-6 col-xl-6">
                        <img className="img-fluid rounded" src={imgContacto} alt="imagen contacto"/>
                    </div>
                </div>
            </div>	
        </Reveal>
        )
    }
