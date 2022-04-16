import './ImagesCardList.css'
import React from 'react'
import Card from '../Card/Card';
import { useSelector } from 'react-redux'

function ImagesCardList(props) {

  const { ImagesToRender } = useSelector(state => state);

  return(
    <section className='card-list'>
      <h3 className='card-list__title'>{props.currentCategory.toUpperCase()}</h3>
      <p className='card-list__description'>Click on the image to get more information</p>
      <div className='card-list__buttons-container'>
        <button
          className={`card-list__button ${props.isPrevBtnDisabled && 'card-list__button_type_disabled'}`}
          onClick={props.handlePrevCLick}
          disabled={props.loading || props.isPrevBtnDisabled}>
          Prev
        </button>
        <button className='card-list__button' onClick={props.handleCategoryClick}>Change Category</button>
        <button
          className={`card-list__button ${props.isNextBtnDisabled && 'card-list__button'}`}
          onClick={props.handleNextCLick}
          disabled={props.loading || props.isNextBtnDisabled}>
            Next
          </button>
      </div>
      <ul className='card-list__container'>
        {ImagesToRender.map(card => (
          <li className='card-list__item' key={card.id}><Card handleImageClick={props.handleImageClick} card={card}/></li>
        ))}
      </ul>
    </section>
  )
}

export default ImagesCardList;