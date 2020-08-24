import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Home } from "./Home";
import { Explore } from "./Explore";
import { Conocenos } from "./Conocenos";
import { Showreel } from "./Showreel";
import { Contacto } from "./Contacto";
import { Footer } from "./Footer";
import useOnScreen from "../components/OnScreen";
import Header from "../components/Header";

export const PaginaPrincipal = () => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
  
    let app = useRef(null);

    const sectionHome = useRef();
    const sectionFooter = useRef();
    

    let footerMostrado= false; 

    const onScreenSectionHome = useOnScreen(sectionHome, "-50%");
    const onScreenSectionFooter = useOnScreen(sectionFooter, "-20px");
    
    if (onScreenSectionFooter && footerMostrado===false) {
        footerMostrado = true;
        document.getElementById('hagamos').classList.add('glow');
        document.getElementById('contacto-animacion').classList.add('glow');
        document.getElementById('numero-animar').classList.add('glowInf');
        document.getElementById('correo-animar').classList.add('glowInf');
        document.getElementById('copy-animacion').classList.add('glowInf');
    }

    if (onScreenSectionHome) {
        document.getElementsByTagName('HTML')[0].style.scrollBehavior = 'smooth';
        
    }else{    
        document.getElementsByTagName('HTML')[0].style.scrollBehavior = 'unset'; 
    }

    useEffect(() => {         
      gsap.to(app, 0, {css: {visibility: 'visible'}})//avoids flash    
    })

    return (
            <div className="App" ref = {el => app = el}>
                <div>
                    {
                        !onScreenSectionFooter && <Header />
                    }
                        
                    <section className="home-section" ref={sectionHome}>                 
                        <Home />
                    </section>
                </div>
                <section className="explore-section" id="explore-sect">
                    <Explore />
                </section>

                <section className="conocenos-section" >
                    <Conocenos />
                </section>

                <section className="showreel-section" >
                    <Showreel />
                </section>
                <section className="contacto-section" >
                    <Contacto />
                </section>
                <footer ref={sectionFooter}>
    
                    <Footer />
                
                </footer>
            </div>
    )
}
