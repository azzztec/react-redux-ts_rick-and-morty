import { SET_INPUT_VALUE } from '../actionCreators/inputAction'

const initialState = {
  inputValue: ''
}

export function inputReducer(state = initialState, action) {
  switch(action.type){
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      }
      default:
        return state
  }
}