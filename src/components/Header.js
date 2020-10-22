import React from 'react'

import './header.scss'

export default function Header(props) {

  const handleInputChange = (e) => {
    let inputValue = e.target.value

    if(isNaN(inputValue)) {
      e.target.value = ''

    } else {
      let inputValueInteger = Number(inputValue)
      props.setInputValueAction(inputValueInteger)
    }

  }

  return (
    <header className="header">
      <div className="container">
          <div className="header__inner">
              <h1 className="header__title"><span className="aqua">Rick</span> and <span className="aqua">Morty</span></h1>
              <p className="header__subtitle">Heroes database</p>
              <div className="header__bg">
                <img src="https://cs10.pikabu.ru/images/big_size_comm/2020-05_1/1588320934156760.jpg" alt=""/>
              </div>
              <input onChange={handleInputChange} className="header__input" type="text" placeholder="Enter episode number" />
          </div>
      </div>
    </header>
  )
}