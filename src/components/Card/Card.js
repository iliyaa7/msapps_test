import './Card.css'
import React from 'react'

function Card(props) {

  return(
    <button className='card'>
      <img className='card-image' alt={props.card.tags} src={props.card.largeImageURL}/>
    </button>
  )
}

export default Card;