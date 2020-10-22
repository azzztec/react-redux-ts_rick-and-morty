import { combineReducers } from 'redux'
import { inputReducer } from './inputReducer'
import { charactersReducer } from './charactersReducer'
import { characterStatusReducer } from './characterStatusReducer'


export const rootReducer = combineReducers({
  input: inputReducer,
  characters: charactersReducer,
  selector: characterStatusReducer
})