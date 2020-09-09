import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap";
import './../styles/components/_mouse.scss';

export default function Mouse() {

    let ball = useRef(null)
    let ball1 = useRef(null)

    useEffect(() => {

        gsap.set(ball, {xPercent: -50, yPercent: -50});
    
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
    
        gsap.set(ball1, {xPercent: -50, yPercent: -50});
    
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

    }, [])

        

    return (
        <div>
            <div className="ball" ref={el => ball = el}></div>
            <div className="ball1" ref={el => ball1 = el}></div>
        </div>
    )
}
