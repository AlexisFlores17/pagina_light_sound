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

  });

  function scrollTop() {
    window.scroll(0, 0);
    console.log("lasdf");
  }

  useLax();

  // animacion cursor

  gsap.set(".ball", {xPercent: -50, yPercent: -50});

  var ball = document.querySelector(".ball");
  var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var mouse = { x: pos.x, y: pos.y };
  var speed = 0.1;

  var xSet = gsap.quickSetter(ball, "x", "px");
  var ySet = gsap.quickSetter(ball, "y", "px");

  window.addEventListener("mousemove", e => {    
    mouse.x = e.x;
    mouse.y = e.y;  
  });

  gsap.ticker.add(() => {
    var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });

  // cursor punto

  gsap.set(".ball1", {xPercent: -50, yPercent: -50});

  var ball1 = document.querySelector(".ball1");
  var pos1 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var mouse1 = { x: pos1.x, y: pos1.y };
  var speed1 = 1;

  var xSet1 = gsap.quickSetter(ball1, "x", "px");
  var ySet1 = gsap.quickSetter(ball1, "y", "px");

  window.addEventListener("mousemove", e => {    
    mouse1.x = e.x;
    mouse1.y = e.y;  
  });

  gsap.ticker.add(() => {
    var dt1 = 1.0 - Math.pow(1.0 - speed1, gsap.ticker.deltaRatio()); 

    pos1.x += (mouse1.x - pos1.x) * dt1;
    pos1.y += (mouse1.y - pos1.y) * dt1;
    xSet1(pos1.x);
    ySet1(pos1.y);
  });

  // fin de animación cursor

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
