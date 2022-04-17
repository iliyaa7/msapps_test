import './PopupCategory.css'
import React from 'react'
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux'
import { options } from './consts'

function PopupCategory(props) {
  const [categoryToSearch, setCategoryToSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState('');
  const { isPopupCategoryOpen } = useSelector(state => state);


  // A hook for updating this form's values with the current's search values

  React.useEffect(() => {
    setCategoryToSearch(props.currentCategory)
    setSortBy(props.currentSortBy)
  }, [props.currentCategory, props.currentSortBy])

  function handleSubmit(e) {
    e.preventDefault();
    props.handleCategorySubmit(categoryToSearch, sortBy);
  }

  function handleCategoryChange(e) {
    setCategoryToSearch(e.target.value);
  }

  function handleRadioBtnChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <>
      <Popup onClose={props.onClose} isOpen={isPopupCategoryOpen}>
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="popup-form__input-container">
            <div className="popup-form__select-container">
              <label className="popup-form__input-title">
                Select a category to search:
              </label>
              <select
                onChange={handleCategoryChange}
                value={categoryToSearch}
                className="popup-form__input"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="popup-form__select-container">
              <input
                type="radio"
                value="popular"
                checked={sortBy === "popular"}
                onChange={handleRadioBtnChange}
              />
              <label className="popup-form__radio-title">Popular</label>
              <input
                type="radio"
                value="latest"
                checked={sortBy === "latest"}
                onChange={handleRadioBtnChange}
              />
              <label className="popup-form__radio-title">Latest</label>
            </div>
          </div>
          <button className="popup-form__submit">Search this category</button>
        </form>
      </Popup>
    </>
  );
}

export default PopupCategory;