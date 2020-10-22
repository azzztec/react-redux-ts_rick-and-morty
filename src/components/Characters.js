import React from 'react'

import './characters.scss'

import Arrows from './Arrows'

export default function Characters(props) {

  const getCharacterEpisodes = (character) => {
    let characterEpisodeLinks = character.episode
    // executes episode number which is at the end of the each link
    let characterEpisodes = characterEpisodeLinks.map(link => +/\d+/.exec(link))
    return characterEpisodes
  }

  const filterCharactersByEpisode = (episode) => {
    let characterList = props.charactersList

    if(!episode) {
      return props.charactersList
    }

    let charactersInCurrentEpisode = characterList.filter(character =>{
      return getCharacterEpisodes(character).includes(episode)
    })

    return charactersInCurrentEpisode
  }
  
  const filterCharactersByStatus = (status) => {
    if(!status || status === 'All') {
      return filteredCharactersByEpisode
    }
    let charactersWithCurrentStatus = filteredCharactersByEpisode.filter(character => {
      return character.status === status
    })

    return charactersWithCurrentStatus
  }

  const handlerSelectorClick = (e) => {
    let targetSelector = e.target
    let selectorType = targetSelector.dataset.type
    if(!selectorType) {
      return;
    }
    let activeSelector = document.querySelector('.characters__selectors-btn.active');
    
    activeSelector.classList.remove('active')
    targetSelector.classList.add('active')

    props.selectByCharacterStatus(selectorType)
  }

  let filteredCharactersByEpisode = filterCharactersByEpisode(props.inputValue)
  let filteredCharactersByStatus = filterCharactersByStatus(props.characterStatus)

  return (
    <main className="characters">
        <div className="container">
            <div className="characters__inner">
                <h2 className="characters__title">Characters</h2>
                <div className="characters__selectors">
                  <ul onClick={handlerSelectorClick} className="characters__selectors-list">
                      <li className="characters__selectors-btn active" data-type="All">All</li>
                      <li className="characters__selectors-btn" data-type="Alive">Alive</li>
                      <li className="characters__selectors-btn" data-type="Dead">Dead</li>
                      <li className="characters__selectors-btn" data-type="unknown">Unknown</li>
                  </ul>
                </div>
                <Arrows
                  nextUrl={props.nextUrl}
                  prevUrl={props.prevUrl}
                  setUrl={props.setUrl}
                />
                {
                  filteredCharactersByStatus.length === 0 && <h1 className="characters__empty-title">No characters have been found...</h1> 
                }
                <div className="characters__list">
                  {
                    filteredCharactersByStatus.map(character => {
                      return (
                        <div className="characters__list-item character" key={character.id}>
                          <div className="character__bg">
                          </div>
                          <div className="character__img">
                            <img src={character.image} alt="" />
                          </div>
                          <div className="character__info">
                            <div className="character__info-id">
                                {character.name.split(' ').join('').toLowerCase() + 'ID' + character.id}
                            </div>
                            <div className="character__info-name">
                                {character.name} <sup className={character.status.toLowerCase()}>{character.status}</sup>
                            </div>
                            <div className="character__info-category">
                                <b>Category:</b> {character.species}
                            </div>
                            <div className="character__info-sex">
                                <b>Sex:</b> {character.gender}
                            </div>
                            <div className="character__info-start">
                                <b>Start:</b> {character.origin.name}
                            </div>
                            <div className="character__info-location">
                                <b>Location:</b> {character.location.name}
                            </div>
                          </div>
                        </div>
                      ) 
                    })
                  }
                </div>
            </div>
        </div>
    </main>
  )
}