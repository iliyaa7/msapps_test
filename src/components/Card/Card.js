import './Card.css'
import React from 'react'

function Card(props) {

  function handleImageClick() {
    props.handleImageClick(props.card)
  }

  return(
    <button onClick={handleImageClick} className='card'>
      <img className='card-image' alt={props.card.tags} src={props.card.largeImageURL}/>
    </button>
  )
}

export default Card;