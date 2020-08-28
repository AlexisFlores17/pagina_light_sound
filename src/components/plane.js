import React, { useRef, useEffect } from "react";
import "../styles/components/_plane.scss"
import plane from "../images/paper.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function Plane() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  let animation = useRef(null);
  let planeImg = useRef(null);


  let filosofia = useRef(null)
  let mision = useRef(null)

  const values = [
    { x: 100, y: -30 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -100 },
    { x: 350, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: -250 }
  ];

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation",                
        ease: "power1.easeInOut",
        toggleActions:"play none none none",
        start:"",
        end: "bottom center",                      
        markers: true,
        scrub: true,
        pin: true,
        duration: '3000'
      }
    })
    
    
    tl.to(planeImg, 1, {
      motionPath: {
        path: [
          { x: 100, y: -30 },
          { x: 300, y: 10 },
          { x: 500, y: 100 },
          { x: 750, y: -100 },
          { x: 350, y: -50 },
          { x: 600, y: 100 },          
          {x:window.innerWidth, y:-250},
        ],
        type: "cubic",
        curviness: 1.25,
        autoRotate: true,
        ease: "power1.inOut"
      },
      css: {opacity: "1"},      
      
    }, 'start')

    tl.to(filosofia, {
      duration: 1, 
      css: {opacity: "1"},            
      ease: 'power3.inOut',
         
    }, 'start')
     
    tl.to(mision, {
      duration: 1, 
      css: {opacity: "1"},
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      // stagger:0.2       
    })
    


  }, []);


  


  return (
    
    <section className="animation" ref={(el) => (animation = el)}>

        <img
            className="paper-plane"
            src={plane}
            alt="plane"
            ref={(el) => (planeImg = el)}
        />
        <div className="content">   
            <div className="filosofia" ref={el => filosofia = el}>
                <h2>Filosofía</h2>		
                <p>"Sólo sabemos que no sabemos nada"</p>		
            </div>   
            <div className="mision" ref={el => mision = el}>
                <h2>Misión</h2>		
                <p>Contribuir como agente de cambio e innovación con soluciones tecnológicas para las industrias creativas</p>				
            </div>                  
            
            
        </div>
    </section>
  );
}
