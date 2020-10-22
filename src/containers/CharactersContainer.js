import React from 'react'
import {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../store/actionCreators/charactersAction'
import { selectByStatus } from '../store/actionCreators/characterStatusAction'

import Characters from '../components/Characters'


function CharactersContainer(props) {

  useEffect(() => {
    props.getCharactersList()
  }, []) 

  return (
    <Characters
      charactersList={props.charactersList}
      inputValue={props.inputValue}
      characterStatus={props.characterStatus}
      selectByCharacterStatus={props.selectByCharacterStatus}
    />
  )
}
  
const mapStateToProps = store => {
  return {
    inputValue: store.input.inputValue,
    charactersList: store.characters.charactersList,
    characterStatus: store.selector.characterStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharactersList: () => dispatch(fetchCharacters()),
    selectByCharacterStatus: (CharacterStatus) => dispatch(selectByStatus(CharacterStatus))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)