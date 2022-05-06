import { createStore } from 'redux'
import { combineReducers } from 'redux'
import {initial_reducer,stats_reducer} from "./reducers.js"


import {composeWithDevTools} from "redux-devtools-extension"

let rootReducer = combineReducers({
    initial_reducer,
    stats_reducer
})
let store = createStore(rootReducer,composeWithDevTools())


export default store

