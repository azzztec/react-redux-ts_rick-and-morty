import React from 'react'
import {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../store/actionCreators/charactersAction'
import { selectByStatus } from '../store/actionCreators/characterStatusAction'
import { urlAction } from '../store/actionCreators/urlAction'

import Characters from '../components/Characters'


function CharactersContainer(props) {

  useEffect(() => {
    props.getCharactersList(props.url)
  },[props.url]) 

  return (
    <Characters
      charactersList={props.charactersList}
      inputValue={props.inputValue}
      characterStatus={props.characterStatus}
      selectByCharacterStatus={props.selectByCharacterStatus}
      prevUrl={props.prevUrl}
      nextUrl={props.nextUrl}
      setUrl={props.setUrl}
    />
  )
}
  
const mapStateToProps = store => {
  return {
    inputValue: store.input.inputValue,
    charactersList: store.characters.charactersList,
    nextUrl: store.characters.nextUrl,
    prevUrl: store.characters.prevUrl,
    characterStatus: store.selector.characterStatus,
    url: store.url.url
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharactersList: (url) => dispatch(fetchCharacters(url)),
    selectByCharacterStatus: (CharacterStatus) => dispatch(selectByStatus(CharacterStatus)),
    setUrl: (newUrl) => dispatch(urlAction(newUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)