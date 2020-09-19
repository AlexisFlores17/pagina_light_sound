import React, {useRef, useState} from 'react'
import {
    BrowserRouter as Router,  
}from 'react-router-dom';
import Light from '../pages/explore/Light';
import Sound from '../pages/explore/Sound';
import Disruptive from '../pages/explore/Disruptive';
import Lab from '../pages/explore/Lab';

export const Explore = () => {

    let line1 = useRef(null)  
    let line2 = useRef(null)  
    let line3 = useRef(null)  
    let line4 = useRef(null)


    const [division, setDivision] = useState("")
    const [isClicked, setClicked] = useState("")

    const handleHover = e => {    
                
        switch(e.target.innerText){            
            case "Light":
                setDivision(Light)
                break;
            case "& Sound":
                setDivision(Sound)
                break;
            case "Disruptive":
                setDivision(Disruptive)
                break;
            case "Lab":
                setDivision(Lab)
                break;
            default:
                setDivision("")
                break;
        }
        
        
    }
    const handleHoverExit = e => {
       
        setDivision(isClicked)

    } 

    const handleClick = e =>{

        line1.classList.remove("color-magenta")
        line2.classList.remove("color-magenta")
        line3.classList.remove("color-magenta")
        line4.classList.remove("color-magenta")

        e.target.classList.add("color-magenta");        
        switch(e.target.innerText){            
            case "Light":
                setClicked(Light)
                break;
            case "& Sound":
                setClicked(Sound)
                break;
            case "Disruptive":
                setClicked(Disruptive)
                break;
            case "Lab":
                setClicked(Lab)
                break;
            default:
                setClicked("")
                break;
        }
    }


    return (

        <Router>
            <div  className="explore-container">
                <div className='explore-titulo col-sm-12 col-md-6 col-lg-6 col-xl-5'>
                    <nav className= "text-lg-left text-xl-left">
                        <ul>
                            <li className="lax explore-option ex-p1" data-lax-translate-x=" vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <div onClick={handleClick} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => line1 = el} to="/explore/Light">Light</div>
                            </li>
                            <li className="lax explore-option ex-p2" data-lax-translate-x="vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <div onClick={handleClick} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => line2 = el} to="/explore/Sound">& Sound</div>
                            </li>
                            <li className="lax explore-option ex-p3" data-lax-translate-x="vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <div onClick={handleClick} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => line3 = el} to="/explore/Disruptive">Disruptive</div>
                            </li>
                            <li className="lax explore-option ex-p4" data-lax-translate-x="vh (vw/4), (vh/4) 0,(-vh/4) 0, (-vh/2) -vh" data-lax-anchor=".explore-container">
                                <div onClick={handleClick} onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => line4 = el} to="/explore/Lab">Lab</div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="explore-descripcion col-sm-12 col-md-6 col-lg-6 col-xl-7" >                        
                        <div>{division}</div>
                </div>
            </div>
        </Router>
    )
}
