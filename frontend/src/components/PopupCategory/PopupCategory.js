import './PopupCategory.css'
import React from 'react'
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux'
import { options } from './consts'

function PopupCategory(props) {
  const [categoryToSearch, setCategoryToSearch] = React.useState('dogs')
  const { isPopupCategoryOpen } = useSelector(state => state);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleCategorySubmit(categoryToSearch)
  }

  function handleCategoryChange(e) {
    setCategoryToSearch(e.target.value)
  }

  return(
    <>
      <Popup onClose={props.onClose} isOpen={isPopupCategoryOpen}>
        <form className='popup-form' onSubmit={handleSubmit}>
          <div className='popup-form__select-container'>
            <label className='popup-form__input-title'>Select a category to search:</label>
            <select onChange={handleCategoryChange} value={categoryToSearch} className='popup-form__input'>
              {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
            </select>
          </div>
          <button className='popup-form__submit'>Search this category</button>
        </form>
      </Popup>
    </>
  )
}

export default PopupCategory;