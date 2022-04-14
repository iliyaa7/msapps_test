export default function currentCategory(state = [], action) {
  switch (action.type) {
    case 'CHANGE_CURRENTCATEGORY':
      return action.payload;
    default:
      return state;
  }
}