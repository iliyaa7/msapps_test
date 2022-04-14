import React from 'react';
import './App.css';
import Header from '../Header/Header'
import ImagesCardList from '../ImagesCardList/ImagesCardList';
import PopupCategory from '../PopupCategory/PopupCategory';
import pixApi from '../../utills/MailApi';
import { useDispatch } from 'react-redux'
import changeCurrentCategoty from '../../actions/changeCurrentCategory';
import changeIsPopupCategoryOpen from '../../actions/changeIsPopupCategoryOpen';

function App() {
  const [category, setCategory] = React.useState('dogs');
  const dispatch = useDispatch();


  React.useEffect(() => {
    pixApi.getCategory(category)
    .then((res) => {
      dispatch(changeCurrentCategoty(res.hits));
    })
    .catch((err) => console.log((err)));
  },[dispatch, category]);

  function handleCategorySubmit(newCategory) {
    setCategory(newCategory);
    closeAllPopups();
  }

  function handleCategoryClick() {
    dispatch(changeIsPopupCategoryOpen());
  }

  function closeAllPopups() {
    dispatch(changeIsPopupCategoryOpen());
  }

  return(
    <main className='main-container'>
      <PopupCategory handleCategorySubmit={handleCategorySubmit} category={category} onClose={closeAllPopups}/>
      <Header/>
      <ImagesCardList category={category} handleCategoryClick={handleCategoryClick}/>
    </main>
  )
}

export default App;