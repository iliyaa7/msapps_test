import { combineReducers } from "redux";
import ImagesToRender from './ImagesToRender';
import isPopupCategoryOpen from "./isPopupCategoryOpen";
import isPopupInfoOpen from "./isPopupInfoOpen";
import currentImage from "./currentImage";



export default combineReducers({
  ImagesToRender, isPopupCategoryOpen, isPopupInfoOpen, currentImage
});