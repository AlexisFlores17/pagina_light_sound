import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Home } from "./Home";
import { Explore } from "./Explore";
import { Conocenos } from "./Conocenos";
import { Showreel } from "./Showreel";
import { Contacto } from "./Contacto";
// import { Footer } from "./Footer";
import useOnScreen from "../components/OnScreen";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useLax } from 'use-lax';
import  lax  from 'lax.js';
import { FooterMain } from "./FooterMain";

 
export const PaginaPrincipal = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  let app = useRef(null);

  const sectionHome = useRef();
  // const sectionExplore = useRef();
  // const sectionConocenos = useRef();
  // const sectionShowreel = useRef();
  // const sectionContacto = useRef();
  // const sectionFooter = useRef();

  // let footerMostrado = false;

  const onScreenSectionHome = useOnScreen(sectionHome, "-50%");
  //const onScreenSectionExplore = useOnScreen(sectionExplore, "-20%");
  // const onScreenSectionFooter = useOnScreen(sectionFooter, "-20px");

  if (onScreenSectionHome) {
    document.getElementsByTagName("HTML")[0].style.scrollBehavior = "smooth";
  } else {
    document.getElementsByTagName("HTML")[0].style.scrollBehavior = "unset";
  }

  // if (onScreenSectionFooter && footerMostrado === false) {
  //   footerMostrado = true;
  //   document.getElementById("hagamos").classList.add("glow");
  //   document.getElementById("contacto-animacion").classList.add("glow");
  //   document.getElementById("numero-animar").classList.add("glowInf");
  //   document.getElementById("correo-animar").classList.add("glowInf");
  //   document.getElementById("copy-animacion").classList.add("glowInf");
  // }

  useEffect(() => {
    gsap.to(app, 0, { css: { visibility: "visible" } }); //avoids flash

    window.addEventListener("resize", function() {
      lax.updateElements();    
    });

    window.addEventListener("scroll", (e) =>{

      if(window.scrollY > window.innerHeight*3){
        document.querySelector('.ball1Black').style.display = "block";
        document.querySelector('.ballBlack').style.display = "block";
        document.querySelector('.ball1').style.display = "none";
        document.querySelector('.ball').style.display = "none";
      }else{
        document.querySelector('.ball1Black').style.display = "none";
        document.querySelector('.ballBlack').style.display = "none";
        document.querySelector('.ball1').style.display = "block";
        document.querySelector('.ball').style.display = "block";
      }
      
      if(window.scrollY > window.innerHeight/2){
        document.querySelector(".header-navbar").style.display="none";
      }else{
        document.querySelector(".header-navbar").style.display="block";
      }
    })

  });

  function scrollTop() {
    window.scroll(0, 0);
    console.log("lasdf");
  }

  useLax();


  return (
    <div className="App" ref={(el) => (app = el)}>
      <div>
        <Header />

        <section className="home-section" ref={sectionHome}>
          <Home />
        </section>
      </div>
      <section className="explore-section" id="explore-sect">
        <Explore />
      </section>

      <Link
        to="/Conocenos/info"
        onClick={scrollTop}
        style={{ textDecoration: "none" }}
      >
        <section className="conocenos-section" id="conocenos-sect">
          <Conocenos />
        </section>
      </Link>

      <section className="showreel-section" id="showreel-sect">
        <Showreel />
      </section>
      <section className="contacto-section" id="contacto-sect">
        <Contacto />
      </section>
      
      <FooterMain />
      
    </div>
  );
};
