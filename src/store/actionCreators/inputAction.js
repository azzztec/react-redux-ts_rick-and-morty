export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export function setInputValue(inputValue) {
  return {
    type: SET_INPUT_VALUE,
    payload: inputValue
  }
}