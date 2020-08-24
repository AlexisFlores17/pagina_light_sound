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

export const PaginaPrincipal = () => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
  
    let app = useRef(null)
  
    const sectionFooter = useRef();
    
    let footerMostrado= false; 

    const onScreenSectionFooter = useOnScreen(sectionFooter, "0px");
    if (onScreenSectionFooter && footerMostrado==false) {
        footerMostrado= true;
        document.getElementById('hagamos').classList.add('glow');
        document.getElementById('contacto-animacion').classList.add('glow');
        document.getElementById('copy-animacion').classList.add('glowInf');
    }
    

    useEffect(() => {         
      gsap.to(app, 0, {css: {visibility: 'visible'}})//avoids flash    
    })

    return (
            <div className="App" ref = {el => app = el}>
                <section className="home-section">
                    <Home />
                </section>

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
