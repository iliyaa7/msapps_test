export default function currentImage(state = [], action) {
  switch (action.type) {
    case 'CHANGE_CURRENTIMAGE':
      return action.payload;
    default:
      return state;
  }
}