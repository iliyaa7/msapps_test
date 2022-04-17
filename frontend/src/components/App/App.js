import React from 'react';
import './App.css';
import Header from '../Header/Header'
import ImagesCardList from '../ImagesCardList/ImagesCardList';
import PopupCategory from '../PopupCategory/PopupCategory';
import PopupInfo from '../PopupInfo/PopupInfo';
import imagesApi from '../../utills/ImagesApi';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import changeImagesToRender from '../../actions/changeImagesToRender';
import changeIsPopupCategoryOpen from '../../actions/changeIsPopupCategoryOpen';
import changeIsPopupInfoOpen from '../../actions/changeIspopupInfoOpen';
import changeCurrentImage from '../../actions/changeCurrentImage';

function App() {
  const [category, setCategory] = React.useState('dogs');
  const [sortBy, setSortBy] = React.useState('popular');
  const [pageNum, setPageNum] = React.useState(1);
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = React.useState(true);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = React.useState(false);
  const [maxPage, setMaxPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const { isPopupCategoryOpen } = useSelector(state => state);
  const dispatch = useDispatch();

  // The hook for fetching the images, the first fetch is with the initial values
  // of the corresponding states.
  // After submitting the search form the values of the states that mentioned above
  // change and trigger this hook to fetch a new search.

  React.useEffect(() => {
    const perPage = 9;
    setLoading(true);
    imagesApi.getCategory(category, pageNum, perPage, sortBy)
    .then((res) => {
      dispatch(changeImagesToRender(res.data.hits));
      setMaxPage(res.maxPages);
    })
    .catch((err) => console.log((err)))
    .finally(() => setLoading(false));
  },[dispatch, category, pageNum, sortBy]);


  // The hooks for controlling the next/prev buttons states.
  // These states toggle the styles and the disable attribute
  // of the button.
  // The states are compared to the maxPage variable that is received from my Rest API


  React.useEffect(() => {
    const nextBtnState = pageNum >= maxPage;
    setIsNextBtnDisabled(nextBtnState);
  },[maxPage, pageNum]);

  React.useEffect(() => {
    const nextBtnState = pageNum <= 1;
    setIsPrevBtnDisabled(nextBtnState);
  },[pageNum]);





  function handlePrevCLick() {
    setPageNum(pageNum - 1)
  }

  function handleNextCLick() {
    setPageNum(pageNum + 1)
  }



  // The handler for submitting the search form.
  // This function receives new values for the states that trigger the
  // hook that responsible for fetching the images, resets the page number state and closes the popup.

  function handleCategorySubmit(newCategory, selctedSortBy) {
    setCategory(newCategory);
    setSortBy(selctedSortBy)
    setPageNum(1);
    closeAllPopups();
  }

  // The handler for opening the form popup

  function handleCategoryClick() {
    dispatch(changeIsPopupCategoryOpen(true));
  }

  // The handler for opening the image info popup
  // It receives a new value for the currentImage state,
  // the state that is responsible for rendering the information
  // of clicked image in the popup.

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
      {isPopupCategoryOpen &&
        <PopupCategory
        currentCategory={category}
        currentSortBy={sortBy}
        handleCategorySubmit={handleCategorySubmit}
        initialCategory={category}
        onClose={closeAllPopups}
        />
      }
      <PopupInfo onClose={closeAllPopups}/>
      <Header/>
      <ImagesCardList
        maxPage={maxPage}
        currentCategory={category}
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