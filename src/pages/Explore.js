import React, {useRef} from 'react'
// import gsap from 'gsap'
import { ExploreRoutes } from '../routes/ExploreRoutes'
import {
    BrowserRouter as Router, Link,  
}from 'react-router-dom';


export const Explore = () => {

    let line1 = useRef(null)  
    let line2 = useRef(null)  
    let line3 = useRef(null)  
    let line4 = useRef(null)

    // const handleHover = e => {    
    //     gsap.to(e.target, {
    //         duration: 0.3,
    //         y: 6,
    //         skewX: 4,
    //         ease: 'power3.inOut' 
    //     })
    // }
    // const handleHoverExit = e => {
    //     gsap.to(e.target, {
    //         duration: 0.3,
    //         y: -6,
    //         skewX: 0,
    //         ease: 'power3.inOut' 
    //     })

    // } 

    const changeColor = e =>{

        line1.classList.remove("color-magenta")
        line2.classList.remove("color-magenta")
        line3.classList.remove("color-magenta")
        line4.classList.remove("color-magenta")

        e.target.classList.add("color-magenta");
    }


    return (

        <Router>
            <div  className="explore-container">
                <div className='explore-titulo col-sm-12 col-md-6 col-lg-6 col-xl-5'>
                    <nav className= "text-lg-left text-xl-left">
                        <ul>
                            <li className="lax explore-option ex-p1" data-lax-translate-x=" vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <Link onClick={changeColor} ref={el => line1 = el} to="/explore/Light">Light</Link>
                            </li>
                            <li className="lax explore-option ex-p2" data-lax-translate-x="vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <Link onClick={changeColor} ref={el => line2 = el} to="/explore/Sound">& Sound</Link>
                            </li>
                            <li className="lax explore-option ex-p3" data-lax-translate-x="vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <Link onClick={changeColor} ref={el => line3 = el} to="/explore/Disruptive">Disruptive</Link>
                            </li>
                            <li className="lax explore-option ex-p4" data-lax-translate-x="vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <Link onClick={changeColor} ref={el => line4 = el} to="/explore/Lab">Lab</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="explore-descripcion col-sm-12 col-md-6 col-lg-6 col-xl-7" >
                        <ExploreRoutes />
                </div>
            </div>
        </Router>
    )
}
