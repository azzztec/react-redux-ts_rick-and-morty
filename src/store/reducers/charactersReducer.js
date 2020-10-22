import { FETCH_CHARACTERS, SET_NEXT_URL, SET_PREV_URL } from '../actionCreators/charactersAction'

const initialState = {
  charactersList: [],
  nextUrl: '',
  prevUrl: ''
}

export function charactersReducer(state = initialState, action) {
  switch(action.type){
    case FETCH_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload
    }
    case SET_NEXT_URL:
      return {
        ...state,
        nextUrl: action.payload
    }
    case SET_PREV_URL:
      return {
        ...state,
        prevUrl: action.payload
    }
    default:
        return state
  }
}