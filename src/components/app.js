import React, { Component } from 'react'
import Header from '../containers/header'
import { Route, Switch } from 'react-router-dom'
import Ressources from './ressources'
import TodoApp from '../components/todo-app'
import RequireAuthentification from "../helpers/require-authentification"

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Ressources}/>
                    <Route exact path="/ressources" 
                    component={RequireAuthentification(Ressources)}/>
                </Switch>
            </div>
        )
    }
}

export default App;