import React, {Component} from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

class RootTest extends Component {
    render() {
        return (
            <Provider  store={createStoreWithMiddleware(reducers)}>
            <MemoryRouter>
                {this.props.children}
            </MemoryRouter>
        </Provider>
        )
    }
}

export default RootTest;