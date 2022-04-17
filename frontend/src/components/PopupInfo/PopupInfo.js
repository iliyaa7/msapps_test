import './PopupInfo.css'
import React from 'react'
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux'

function PopupInfo(props) {
  const { isPopupInfoOpen, currentImage } = useSelector(state => state);


  return (
    <>
      <Popup onClose={props.onClose} isOpen={isPopupInfoOpen}>
        <div className="popup-info">
          <img
            src={currentImage.largeImageURL}
            className="popup-info__image"
            alt={currentImage.tags}
          />
          <p className="popup-info__text">{`Views: ${currentImage.views}`}</p>
          <p className="popup-info__text">{`Collections: ${currentImage.collections}`}</p>
          <p className="popup-info__text">{`Downloads: ${currentImage.downloads}`}</p>
          <p className="popup-info__text">{`Likes: ${currentImage.likes}`}</p>
        </div>
      </Popup>
    </>
  );

}

export default PopupInfo;