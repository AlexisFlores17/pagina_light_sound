import React from 'react'
// import gsap from 'gsap'
import {
    BrowserRouter as Router,  
    Switch,
    Route,
}from 'react-router-dom'
import { PaginaPrincipal } from '../pages/PaginaPrincipal'
import { ConocenosDetalle } from '../pages/conocenos/ConocenosDetalle'
import { Footer } from '../pages/Footer'
import Header2 from '../components/Header2'
import Mouse from './../components/mouse';
import Loader from './../components/Loader'


export const AppRoutes = () => {
    

    return (
        <Router>            
            <div>   
                <Loader  />
                <Mouse />             
                <Switch>
                    <Route path='/Conocenos/info'>
                        <Header2 />     
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
