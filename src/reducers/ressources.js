import { ADD_RESSOURCES } from '../actions/action-types'

const initialState= {
    ressourceList: [0]
}

export default function RessourceReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_RESSOURCES:
            return {
                ressourceList: [
                ...state.ressourceList,
                state.ressourceList[state.ressourceList.length - 1 ] + 1
                ]
            }
        default:
            return state
    }
}