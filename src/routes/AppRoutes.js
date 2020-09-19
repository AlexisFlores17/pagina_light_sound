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
import Header3 from '../components/Header3'
import Mouse from './../components/mouse';
import MouseBlack from './../components/MouseBlack';
import Loader from './../components/Loader'
import Aviso from '../pages/Aviso'

export const AppRoutes = () => {
    

    return (
        <Router>            
            <div>   
                <Loader  />
                <Mouse />    
                <MouseBlack />         
                <Switch>
                    <Route path='/Conocenos/info'>
                        <Header2 />     
                        <ConocenosDetalle />    
                        <Footer />                       
                    </Route>
                    <Route exact path='/'>
                        <PaginaPrincipal />                    
                    </Route>
                    <Route path='/Aviso'>
                        <Header3 />     
                        <Aviso /> 
                        <Footer />                                          
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}
