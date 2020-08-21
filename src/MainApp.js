import React, { useRef, useEffect } from "react";
import "./styles/MainApp.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Conocenos } from "./pages/Conocenos";
import { Showreel } from "./pages/Showreel";
import { Contacto } from "./pages/Contacto";
import { Footer } from "./pages/Footer";

export const MainApp = () => {

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
