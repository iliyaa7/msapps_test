export default function isPopupInfoOpen(state = false, action) {
  switch (action.type) {
    case 'CHANGE_ISPOPUPINFOOPEN':
      return action.payload;
    default:
      return state;
  }
}