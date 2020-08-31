import React from 'react'
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

    return (
        <Router>
            <div>

                <Switch>
                    <Route path='/Conocenos/info'>
                        <Header/>     
                        <ConocenosDetalle />    
                        <Footer />                       
                    </Route>
                    <Route path='/ShowReel/info'>
                        <ShowreelDetalle />   
                        <Footer />                     
                    </Route>
                    <Route path='/Contacto/info'>
                        <ContactoDetalle />                       
                    </Route>
                    <Route path='/'>
                        <PaginaPrincipal />                    
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}
