import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

//For ReduxDev Tools extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(reduxThunk))
    ) 


ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)