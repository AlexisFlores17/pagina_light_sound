import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'

export const Conocenos = () => {
    let mask = useRef(null);
    let container = useRef(null);
    let maskContent = useRef(null);
    let ball = useRef(null)

    useEffect(() => {
        let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let mouse = { x: pos.x, y: pos.y };
        let speed = 0.1;

        gsap.set(mask, { xPercent: -50, yPercent: -50 });
        gsap.set(ball, { xPercent: -50, yPercent: -50 });

        gsap.set(maskContent, {
        width: container.offsetWidth,
        height: container.offsetHeight
        });
        container.addEventListener("mousemove", onMove);

        var xSet = gsap.quickSetter(mask, "x", "px");
        var ySet = gsap.quickSetter(mask, "y", "px");

        var xSetContent = gsap.quickSetter(maskContent, "x", "px");
        var ySetContent = gsap.quickSetter(maskContent, "y", "px");

        var xSetBall = gsap.quickSetter(ball, "x", "px");
        var ySetBall = gsap.quickSetter(ball, "y", "px");

        gsap.ticker.add(() => {
        var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
        xSetContent(-pos.x);
        ySetContent(-pos.y);

        xSetBall(pos.x);
        ySetBall(pos.y);
        });
        function onMove(e) {
        mouse.x = e.x;
        mouse.y = e.y;
        }
    }, []);
    
    return (
        
        <div className="container" ref={(el) => (container = el)}>
            <div className="ball" ref = {el => ball = el}>Click</div>
            <div className="figuras">
                    <div className="triangulo"></div>
                    <div className="circulo"></div>
            </div>
            <div className="conocenos-texto">
                <h1 className="lax titulo-conocenos" data-lax-translate-y="0 0vh, vh vh, (vh*1.8) 0 " data-lax-opacity=" (vh*2) 1 , (vh*3) 0 ">El equipo</h1>
                <p className="lax informacion-conocenos" data-lax-translate-y="0 0vh, vh vh, (vh*1.8) 0 " data-lax-opacity=" (vh*2) 1 , (vh*3) 0 ">Somos un equipo de creadores, pensadores, exploradores y nerds tecnológicos. Nos enfocamos en nuestros proyectos con curiosidad y experimentación, usando todo lo que aprendemos para diseñar experiencias que conecten con personas como tú.</p>
            </div>
            <div className="boton-conocenos">Presiona para conocernos</div>

            <div className="mask-container">
                <div className="mask" ref={(el) => (mask = el)}>
                    <div className="mask-content" ref={(el) => (maskContent = el)}>
                        <div className="team"></div>
                    </div>
                </div>
            </div>
        </div>
        
        

    )
}
