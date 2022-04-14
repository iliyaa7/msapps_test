import { combineReducers } from "redux";
import ImagesToRender from './ImagesToRender';
import isPopupCategoryOpen from "./isPopupCategoryOpen";



export default combineReducers({
  ImagesToRender, isPopupCategoryOpen,
});