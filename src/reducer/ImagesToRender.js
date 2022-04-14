export default function imagesToRender(state = [], action) {
  switch (action.type) {
    case 'CHANGE_IMAGESTORENDER':
      return action.payload;
    default:
      return state;
  }
}