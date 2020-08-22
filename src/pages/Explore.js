import React from 'react'
import {
    BrowserRouter as Router,  
    Switch,
    Route,
    Link
}from 'react-router-dom'
import gsap from 'gsap'
import { ExploreRoutes } from '../routes/ExploreRoutes'

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
            <div className="explore-container col-12">
                <div  className="menu-secondary-background-color"></div>
                <div  className="menu-layer">
                    <div className='row col-xl-12 col-sm-6'>
                        <div className='explore-texto col-sm-6 col-md-5 col-xl-6'>
                            <nav>
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
                        <div className="division-services col-sm-6 col-md-7 col-xl-6" >
                                <ExploreRoutes />
                        </div>
                    </div>   
                </div>
            </div>
    )
}
