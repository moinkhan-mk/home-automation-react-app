import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {SignIn} from './components/SignIn'
import {SignUp} from './components/SignUp'
import {CameraConfig} from './components/CameraConfig'
import {LiveCamera} from './components/LiveCamera'
import {Testing} from './components/testing'

export const RouteConfiq = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route  exact path = "/" component = {SignIn} /> 
                    <Route path = "/createaccount" component = {SignUp} />
                    <Route exact path = "/configuration" component = {CameraConfig} />
                    <Route path ="/livecamera"  component = {LiveCamera} />
                    <Route path = '/abc' component = {Testing} />
                </Switch>
            </Router>
        </div>
    )
}
