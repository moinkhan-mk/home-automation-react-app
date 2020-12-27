import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {SignIn} from './components/SignIn'
import {LiveCamera} from './components/LiveCamera'
import {Testing} from './components/testing'
import ResponsiveDrawer_live from './components/MenuBar_LiveCame'
import ResponsiveDrawer_Configuration from './components/MenuBar_Configuration'
import ResponsiveDrawer_Status from './components/Camera_Status';

export const RouteConfiq = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route  exact path = "/" component = {SignIn} /> 
                    <Route path ="/livecamera"  component = {LiveCamera} />
                    <Route path = '/abc' component = {Testing} />
                    <Route path = '/menuBar' component = {ResponsiveDrawer_Status}/>
                    <Route path = '/menuBar_live' component = {ResponsiveDrawer_live}/>
                    <Route path = '/configure_camera' component = {ResponsiveDrawer_Configuration} />
                </Switch>
            </Router>
        </div>
    )
}
