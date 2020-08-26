import React from 'react'
import gsap from 'gsap'
import { ExploreRoutes } from '../routes/ExploreRoutes'
import {
    BrowserRouter as Router, Link,  
}from 'react-router-dom'


export const Explore = () => {

    const handleHover = e => {    
    gsap.to(e.target, {
        duration: 0.3,
        y: 6,
        skewX: 4,
        ease: 'power3.inOut' 
    })
    }
    const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -6,
        skewX: 0,
        ease: 'power3.inOut' 
    })

    } 

    return (

        <Router>
            <div  className="explore-container">
                <div className='explore-titulo col-sm-6 col-md-6 col-lg-6 col-xl-5'>
                    <nav className= "text-lg-left text-xl-left">
                        <ul>
                        <li>
                            <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/explore/Light">Light</Link>
                        </li>
                        <li>
                            <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/explore/Sound">& Sound</Link>
                        </li>
                        <li>
                            <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/explore/Disruptive">Disruptive</Link>
                        </li>
                        <li>
                            <Link onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} to="/explore/Lab">Lab</Link>
                        </li>
                        </ul>
                    </nav>
                </div>
                <div className="explore-descripcion col-sm-6 col-md-6 col-lg-6 col-xl-7" >
                        <ExploreRoutes />
                </div>
            </div>
        </Router>
    )
}
