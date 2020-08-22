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
import {BrowserRouter as Router} from 'react-router-dom'

export const PaginaPrincipal = () => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
  
    let app = useRef(null)
  
  

    useEffect(() => {         
      gsap.to(app, 0, {css: {visibility: 'visible'}})//avoids flash    
    })

    return (
            <div className="App" ref = {el => app = el}>
                <section className="home-section" >
                    <Home />
                </section>

                <section className="explore-section">
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
