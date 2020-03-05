import React, { Component } from 'react'
import Header from '../containers/header'
import { Route, Switch } from 'react-router-dom'
import Ressources from './ressources'
import Home from '../components/home'
import RequireAuthentification from "../helpers/require-authentification"
import {HookTest} from '../components/hook-test'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HookTest}/>
                    <Route exact path="/ressources" 
                    component={RequireAuthentification(Ressources)}/>
                </Switch>
            </div>
        )
    }
}

export default App;