export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'

export const fetchCharacters = () => dispatch => {
  fetch('https://rickandmortyapi.com/api/character')
  .then(res => res.json())
  .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters.results
      })
    }
  );
};