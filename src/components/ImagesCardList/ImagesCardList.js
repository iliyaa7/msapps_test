import './ImagesCardList.css'
import React from 'react'
import Card from '../Card/Card';
import { useSelector } from 'react-redux'

function ImagesCardList(props) {

  const { currentCategory } = useSelector(state => state);

  React.useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  return(
    <section className='card-list'>
      <div className='category'>
        <h2 className='category__heading'>Click the button below to change the category</h2>
        <button className='category__button' onClick={props.handleCategoryClick}>Change Category</button>
        <p className='category__name'></p>
      </div>
      <h3 className='card-list__title'>{props.category.toUpperCase()}</h3>
      <p className='card-list__description'>For more information click on the image</p>
      <ul className='card-list__container'>
        {currentCategory.map(card => (
          <li className='card-list__item' key={card.id}><Card card={card}/></li>
        ))}
      </ul>
    </section>
  )
}

export default ImagesCardList;