import counterReducer from './counter'
import isLoggedReducer from './isLogged'
import {combineReducers} from 'redux'


const rootReducers=combineReducers({
    counter:counterReducer,
    Logged:isLoggedReducer
})

export default rootReducers;