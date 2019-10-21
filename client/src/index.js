import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import App from './components/App'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware())
    ) 


ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)