import { SET_URL } from '../actionCreators/urlAction'

const initialState = {
  url: 'https://rickandmortyapi.com/api/character'
}

export const urlReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.payload
      }
    default:
      return state
  }
}