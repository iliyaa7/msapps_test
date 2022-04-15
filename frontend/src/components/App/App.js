import React from 'react';
import './App.css';
import Header from '../Header/Header'
import ImagesCardList from '../ImagesCardList/ImagesCardList';
import PopupCategory from '../PopupCategory/PopupCategory';
import PopupInfo from '../PopupInfo/PopupInfo';
import pixApi from '../../utills/MailApi';
import { useDispatch } from 'react-redux'
import changeImagesToRender from '../../actions/changeImagesToRender';
import changeIsPopupCategoryOpen from '../../actions/changeIsPopupCategoryOpen';
import changeIsPopupInfoOpen from '../../actions/changeIspopupInfoOpen';
import changeCurrentImage from '../../actions/changeCurrentImage';

function App() {
  const [category, setCategory] = React.useState('dogs');
  const [pageNum, setPageNum] = React.useState(1);
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(true);
  const [isNextDisabled, setIsNextDisabled] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(pageNum === 1) setIsPrevDisabled(true);
    if(pageNum !== 1) setIsPrevDisabled(false);
  },[setIsPrevDisabled, pageNum]);

  React.useEffect(() => {
    pixApi.getCategory(category, pageNum)
    .then((res) => {
      
      dispatch(changeImagesToRender(res.hits));
    })
    .catch((err) => console.log((err)));
  },[dispatch, category, pageNum]);

  function handlePrevCLick() {
    setPageNum(pageNum - 1)
  }

  function handleNextCLick() {
    setPageNum(pageNum + 1)
  }

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
        handlePrevCLick={handlePrevCLick}
        handleNextCLick={handleNextCLick}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
    </main>
  )
}

export default App;