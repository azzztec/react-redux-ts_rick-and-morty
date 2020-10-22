export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'
export const SET_NEXT_URL = 'SET_NEXT_URL'
export const SET_PREV_URL = 'SET_PREV_URL'

export const fetchCharacters = (url) => dispatch => {
  fetch(url)
  .then(res => res.json())
  .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters.results
      })
      dispatch({
        type: SET_NEXT_URL,
        payload: characters.info.next,
      })
      dispatch({
        type: SET_PREV_URL,
        payload: characters.info.prev,
      })
    }
  );
};