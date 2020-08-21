import React from 'react';
import LSDbackground from '../video/backgroundweb.mp4';
import arrow from '../images/arrow-right.svg';

export const Home = () => {
    return (
        <div>
            <div className="home-video">
                <video autoPlay muted loop className="myVideo" type="video/mp4" playsInline>
                    <source src={LSDbackground} />
                </video>
            </div>
            <div>
                <h1>Hola</h1>
            </div>
        </div>
    )
}
