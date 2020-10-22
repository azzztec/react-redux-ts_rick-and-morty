export const SET_URL = 'SET_URL'

export const urlAction = (url) => {
  return {
    type: SET_URL,
    payload: url
  }
}