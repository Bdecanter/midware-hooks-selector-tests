import { combineReducers } from 'redux'
import AuthentificationReducer from './reducer-authentification'
import ActionInfoReducer from './reducer-action-info'
import RessourceReducer from './ressources'


const rootReducer = combineReducers({
    authentification: AuthentificationReducer,
    actionInfo: ActionInfoReducer,
    ressource : RessourceReducer
})

export default rootReducer