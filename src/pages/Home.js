import React from 'react';
import LSDbackground from '../video/backgroundweb.mp4';
import arrow from '../images/arrow-right.svg';

export const Home = () => {
    return (
        <div className="col-12">
            <div className="home-video">
                <video autoPlay muted loop className="myVideo" type="video/mp4" playsInline>
                    <source src={LSDbackground} />
                </video>
            </div>

            <div className="home-container col-md-6 col-12">
                <h5 className="animate__animated animate__fadeInUp animate__slow">
                    Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
                </h5>   
                <div className="btn-row animate__animated animate__fadeIn animate__delay-2s ">
                    <button className="explore-button" >Explore
                        <div className="arrow-icon" >
                        <img src={arrow} alt="row"/>
                        </div>
                    </button>                 
                </div>             
            </div>  
        </div>
    )
}
