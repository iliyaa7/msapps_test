import React from 'react';
import './App.css';
import Header from '../Header/Header'
import ImagesCardList from '../ImagesCardList/ImagesCardList';
import PopupCategory from '../PopupCategory/PopupCategory';
import PopupInfo from '../PopupInfo/PopupInfo';
import pixApi from '../../utills/MailApi';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import changeImagesToRender from '../../actions/changeImagesToRender';
import changeIsPopupCategoryOpen from '../../actions/changeIsPopupCategoryOpen';
import changeIsPopupInfoOpen from '../../actions/changeIspopupInfoOpen';
import changeCurrentImage from '../../actions/changeCurrentImage';

function App() {
  const [category, setCategory] = React.useState('dogs');
  const dispatch = useDispatch();
  const { isPopupInfoOpen } = useSelector(state => state);

  React.useEffect(() => {
    pixApi.getCategory(category)
    .then((res) => {
      dispatch(changeImagesToRender(res.hits));
    })
    .catch((err) => console.log((err)));
  },[dispatch, category]);

  function handleCategorySubmit(newCategory) {
    setCategory(newCategory);
    closeAllPopups();
  }

  function handleCategoryClick() {

    dispatch(changeIsPopupCategoryOpen(true));
  }

  function handleImageClick(currentImage) {
    dispatch(changeCurrentImage(currentImage));
    dispatch(changeIsPopupInfoOpen(true));
  }

  function closeAllPopups() {
    dispatch(changeIsPopupCategoryOpen(false));
    dispatch(changeIsPopupInfoOpen(false));
  }

  return(
    <main className='main-container'>
      <PopupCategory
        handleCategorySubmit={handleCategorySubmit}
        initialCategory={category}
        onClose={closeAllPopups}
      />
      <PopupInfo onClose={closeAllPopups}/>
      <Header/>
      <ImagesCardList
        currentCategory={category}
        handleCategoryClick={handleCategoryClick}
        handleImageClick={handleImageClick}
      />
    </main>
  )
}

export default App;