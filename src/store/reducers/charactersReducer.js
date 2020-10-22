import { FETCH_CHARACTERS } from '../actionCreators/charactersAction'

const initialState = {
  charactersList: [],
  filteredCharactersList: []
}

export function charactersReducer(state = initialState, action) {
  switch(action.type){
    case FETCH_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload
    }
    default:
        return state
  }
}