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
            <div className="explore-container">
                  
            </div>
    )
}
