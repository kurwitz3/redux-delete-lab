import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band={
        id: uuid(),
        band: action.payload.band
      }

      return { bands: state.bands.concat(band) }

      case 'DELETE_TODO':

      return {bands: state.bands.filter(band => band.id !== action.payload)}

    default:
      return state;
  }
};
