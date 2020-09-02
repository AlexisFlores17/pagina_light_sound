import React from 'react'
import {
    BrowserRouter as Router,  
    Switch,
    Route,
}from 'react-router-dom'
import { PaginaPrincipal } from '../pages/PaginaPrincipal'
import { ConocenosDetalle } from '../pages/conocenos/ConocenosDetalle'
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
                    <Route path='/'>
                        <PaginaPrincipal />                    
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}
