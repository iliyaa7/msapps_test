export default function isPopupCategoryOpen(state = false, action) {
  switch (action.type) {
    case 'CHANGE_ISPOPUPCATEGORYOPEN':
      return !state;
    default:
      return state;
  }
}