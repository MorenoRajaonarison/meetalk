import {composeWithDevTools} from "redux-devtools-extension"
import {combineReducers, createStore, applyMiddleware} from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import authReducer from "./reducers/authReducer"
import alertReducer from "./reducers/alertReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store