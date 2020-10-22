import { SELECT_BY_STATUS } from '../actionCreators/characterStatusAction'

const initialState = {
  characterStatus: ''
}

export function characterStatusReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BY_STATUS:
      return {
        ...state,
        characterStatus: action.payload
      }
    default:
      return state
  }
}