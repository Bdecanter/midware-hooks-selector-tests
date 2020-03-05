import React from 'react';
import TodoApp from '../components/todo-app'
import { shallow, mount } from "enzyme"
import { setAuthentification, incrementActionCount } from '../actions/index'
import AuthentificationReducer from '../reducers/reducer-authentification'
import { SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT } from '../actions/action-types'
import Header from '../containers/header'

import RootTest from './root-test';

describe("Test sur Header", () => {
    it('Render du composant connecté sans erreur avec Shallow', () => {
        const wrapper = shallow(
                <RootTest>
                    <Header/>
                </RootTest>
        )
        console.log(wrapper.debug())
    })

    it('Verifie le bouton Connection & Deconnection', () => {
        const wrapper = mount(
                <RootTest>
                    <Header/>
                </RootTest>
        )
        expect(wrapper.find("a").at(2).text()).toEqual("Connection")
        wrapper.find("a").at(2).simulate("click")
        expect(wrapper.find("a").at(2).text()).toEqual("Deconnexion")
    })

    it("Test le Payload d'une action", () => {
        const action = incrementActionCount()
        expect(action.type).toEqual(INCREMENT_ACTION_COUNT)
    })

    it("Test le Reducers avec un initial State", () => {
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, {}).isLoggedIn).toEqual(false)
    })

    it("Test le Reducers avec un initial State", () => {
        const action = { type: SET_AUTHENTIFICATION, payload: true}
        const initialState = {
            isLoggedIn: false
        }
        expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(true)
    })

})