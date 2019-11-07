import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import * as reducers from "./Vendors"

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
