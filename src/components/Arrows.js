import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import './arrows.scss'

export default function Arrows(props) {

  const handleNextArrowClick = () => {
    if(!props.nextUrl) {
      return;
    }
    props.setUrl(props.nextUrl)
  }

  const handlePrevArrowClick = () => {
    if(!props.prevUrl) {
      return;
    }
    props.setUrl(props.prevUrl)
  }

  return (
    <div className="arrows">
      <div className="arrows__inner">
        <span onClick={handlePrevArrowClick} className="arrows__icon">
            <FontAwesomeIcon icon={faAngleLeft} size="4x" hello='SSSSS'/>
        </span>
        <span onClick={handleNextArrowClick} className="arrows__icon">
            <FontAwesomeIcon icon={faAngleRight} size="4x"/>
        </span>
      </div>
    </div>
  )
}