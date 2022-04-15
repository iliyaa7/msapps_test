export default function isPopupCategoryOpen(state = false, action) {
  switch (action.type) {
    case 'CHANGE_ISPOPUPCATEGORYOPEN':
      return action.payload;
    default:
      return state;
  }
}