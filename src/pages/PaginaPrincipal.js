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
  
    const sectionOne = useRef();
    const sectionTwo = useRef();

    const onScreenSectionOne = useOnScreen(sectionOne, "-10%");
    const onScreenSectionTwo = useOnScreen(sectionTwo, "20%");
    console.log(onScreenSectionOne);

    useEffect(() => {         
      gsap.to(app, 0, {css: {visibility: 'visible'}})//avoids flash    
    })

    return (
            <div className="App" ref = {el => app = el}>
                <section className="home-section">
                    <Home />
                </section>

                <section className="explore-section" id="explore-sect" ref={sectionOne}>
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
                <footer>
                    <Footer />
                </footer>
            </div>
    )
}
