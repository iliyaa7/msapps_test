import React from "react";
import './Popup.css'

function Popup(props) {


  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`} id={`${props.id}__popup`}>
      <button onClick={props.onClose} type="button" className="popup__close-button" id="close__form"/>
      <div className="popup__container">
          {props.children}
      </div>
    </div>
  );
}

export default Popup;
