import React, {useRef, useEffect} from 'react'
import Fade from "react-reveal/Fade";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        <div className='showreel-container'>
            <div id="contacto-left"  className="contacto-div" ref={el => contacto = el}>
                <h1 ref={ el => line1 = el}>
                    Hagamos algo juntos
                </h1>
                <h5 id="texto2" >
                    <div ref= {el => line2 = el}>¿Tienes algún desafío creativo para nosotros?</div>
                    <br></br>
                    <br></br>
                    <div ref= {el => line3 = el}>Nos encantaría escucharlo</div>
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
