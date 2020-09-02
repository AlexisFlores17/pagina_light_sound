import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import {
    BrowserRouter as Router,  
    Switch,
    Route,
}from 'react-router-dom'
import { PaginaPrincipal } from '../pages/PaginaPrincipal'
import { ConocenosDetalle } from '../pages/conocenos/ConocenosDetalle'
import { ShowreelDetalle } from '../pages/showreel/ShowreelDetalle'
import { ContactoDetalle } from '../pages/contacto/ContactoDetalle'
import { Footer } from '../pages/Footer'
import Header from '../components/Header'



export const AppRoutes = () => {
    // let cursor = useRef(null)
    // let follower = useRef(null)

    // useEffect(() => {
    //     let posX = 0
    //     let posY = 0
    
    //     let mouseX = 0
    //     let mouseY = 0
    //     document.body.onmousemove = function(e) {
    //         mouseX = e.clientX;
    //         mouseY = e.clientY;
    //         console.log(mouseX)
    //     }

    //     gsap.to({}, 0.016, {
    //         repeat: -1,
    //         onRepeat: function() {
    //           posX += (mouseX - posX) / 9;
    //           posY += (mouseY - posY) / 9;
          
    //           gsap.set(follower, {
    //               css: {
    //               left: posX - 12,
    //               top: posY - 12
    //               }
    //           });
          
    //           gsap.set(cursor, {
    //               css: {
    //               left: mouseX,
    //               top: mouseY
    //               }
    //           });
    //         }
    //       });


    // }, [])
    

    return (
        <Router>            
            <div>                
                <Switch>
                    <Route path='/Conocenos/info'>
                        <Header/>     
                        <ConocenosDetalle />    
                        <Footer />                       
                    </Route>
                    <Route path='/'>
                        <PaginaPrincipal />                    
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}
