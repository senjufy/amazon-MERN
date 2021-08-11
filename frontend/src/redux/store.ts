import {createStore, combineReducers} from 'redux'
import {reducer, cartReducer, searchReducer} from './reducer'

export default createStore (
    combineReducers({reducer, cartReducer, searchReducer}),
)