import React from 'react'
import { setInputValue } from '../store/actionCreators/inputAction'
import {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../store/actionCreators/charactersAction'

import Characters from '../components/Characters'


function CharactersContainer(props) {

  useEffect(() => {
    props.getCharactersList()
  }, []) 

  return (
    <Characters
      charactersList={props.charactersList}
      inputValue={props.inputValue}
    />
  )
}
  
const mapStateToProps = store => {
  return {
    inputValue: store.input.inputValue,
    charactersList: store.characters.charactersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharactersList: () => dispatch(fetchCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)