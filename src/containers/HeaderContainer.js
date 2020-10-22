import React from 'react'
import { setInputValue } from '../store/actionCreators/inputAction'

import Header from '../components/Header'
import { connect } from 'react-redux'

function HeaderContainer(props) {
  return (
      <Header setInputValueAction={props.setInputValueAction}/>
  )
}
  
const mapDispatchToProps = dispatch => {
  return {
    setInputValueAction: inputValue => dispatch(setInputValue(inputValue)),
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer)