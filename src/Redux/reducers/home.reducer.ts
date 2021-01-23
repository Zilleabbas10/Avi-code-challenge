import { ACTION_TYPES } from '../../Actions';
const { HOME_ACTIONS } = ACTION_TYPES;

const initialState = {
  practices: [],
  mapCoordinates: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.SET_PRACTICES:
      return { ...state, practices: action.payload };
    case HOME_ACTIONS.SET_MAP_COORDINATES:
      return { ...state, mapCoordinates: action.payload };
    default:
      return state;
  }
};

export default home;
