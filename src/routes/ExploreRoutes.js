import React from 'react';
import {
    Switch,
    Route,
}from 'react-router-dom'
import Light from '../pages/explore/Light';
import Sound from '../pages/explore/Sound';
import Disruptive from '../pages/explore/Disruptive';
import Lab from '../pages/explore/Lab';


export const ExploreRoutes = () => {
    return (
        <Switch>                
            <Route exact path="/explore/Light" component={Light} />
            <Route exact path="/explore/Sound" component={Sound} />
            <Route exact path="/explore/Disruptive" component={Disruptive} />
            <Route exact path="/explore/Lab" component={Lab} />
        </Switch> 
    )
}
