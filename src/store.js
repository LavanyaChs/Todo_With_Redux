// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import reducer from './reducers/index'

import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

export const store = createStore(
    reducer, composeWithDevTools(
        applyMiddleware(...middleware),
        // other store enhancers if any
    )
);


