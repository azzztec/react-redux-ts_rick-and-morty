import { combineReducers } from 'redux'
import { inputReducer } from './inputReducer'
import { charactersReducer } from './charactersReducer'


export const rootReducer = combineReducers({
  input: inputReducer,
  characters: charactersReducer
})