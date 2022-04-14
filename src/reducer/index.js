import { combineReducers } from "redux";
import currentCategory from './currentCategory';
import isPopupCategoryOpen from "./isPopupCategoryOpen";



export default combineReducers({
  currentCategory, isPopupCategoryOpen,
});