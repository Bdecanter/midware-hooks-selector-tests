import React from 'react';
import TodoApp from '../components/todo-app'
import { shallow } from "enzyme"

describe("Test TodoApp Fonctionnement", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<TodoApp/>)
    })
    afterEach(() => {
        wrapper.unmount()
    })

    it('Render le composant App Sans erreur avec Shallow', () => {
        expect(wrapper.html()).toContain("Nouvelle tâche")
    })
    it('Possède 2 classes CSS Row', () => {
        expect(wrapper.find(".row").length).toEqual(2)
    })
    it('Possède 1 ID addButton', () => {
        expect(wrapper.find("#addButton").length).toEqual(1)
    })
    it("Change la valeur de l'input", () => {
        wrapper.find("input").simulate("change", {target: {value: "Yo"}})
        expect(wrapper.find("input").prop("value")).toEqual("Yo")
    })
    it("Saisie une valeur dans l'input, clique sur le bouton et verifie que le text est dans la liste", () => {
        wrapper.find("input").simulate("change", {target: {value: "Yo"}})
        wrapper.find("button").simulate("click")
        expect(wrapper.find(".list-group-item").text()).toContain("Yo")
    })

})