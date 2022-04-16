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
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = React.useState(true);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = React.useState(false);
  const [maxPage, setMaxPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const nextBtnState = pageNum >= maxPage;
    setIsNextBtnDisabled(nextBtnState);
  },[maxPage, pageNum]);

  React.useEffect(() => {
    const nextBtnState = pageNum <= 1;
    setIsPrevBtnDisabled(nextBtnState);
  },[pageNum]);

  React.useEffect(() => {
    const perPage = 9;
    setLoading(true);
    pixApi.getCategory(category, pageNum, perPage)
    .then((res) => {
      dispatch(changeImagesToRender(res.data.hits));
      setMaxPage(res.maxPages);
    })
    .catch((err) => console.log((err)))
    .finally(() => setLoading(false));
  },[dispatch, category, pageNum]);

  function handlePrevCLick() {
    setPageNum(pageNum - 1)
  }

  function handleNextCLick() {
    setPageNum(pageNum + 1)
  }

  function handleCategorySubmit(newCategory) {
    setCategory(newCategory);
    setPageNum(1);
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
        maxPage={maxPage}
        currentCategory={`${category} ${pageNum}`}
        handleCategoryClick={handleCategoryClick}
        handleImageClick={handleImageClick}
        handlePrevCLick={handlePrevCLick}
        handleNextCLick={handleNextCLick}
        isPrevBtnDisabled={isPrevBtnDisabled}
        isNextBtnDisabled={isNextBtnDisabled}
        loading={loading}
      />
    </main>
  )
}

export default App;