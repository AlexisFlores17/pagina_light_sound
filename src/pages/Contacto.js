import React from 'react'
import { Link } from 'react-router-dom'

function scrollTop () {

    window.scroll(0,0);

}

export const Contacto = () => {
    return (
        <div className='showreel-container'>
            <div id="contacto-left"  className="contacto-div" ></div>
            <div id="contacto-right" className="contacto-div" ></div>
        </div>
    )
}
