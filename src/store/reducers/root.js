import { combineReducers } from 'redux'
import { inputReducer } from './inputReducer'
import { charactersReducer } from './charactersReducer'
import { characterStatusReducer } from './characterStatusReducer'
import { urlReducer } from './urlReducer'


export const rootReducer = combineReducers({
  input: inputReducer,
  characters: charactersReducer,
  selector: characterStatusReducer,
  url: urlReducer
})