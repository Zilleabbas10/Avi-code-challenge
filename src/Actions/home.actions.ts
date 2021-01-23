import { HomeApiHandlers, CommonHelpers, } from '../Services';
import { isEmptyOrNil } from '../Utils';
import { ACTION_TYPES } from '.';
import { toggleAppScreenLoader } from './appLoader.actions';

export const getPractices = () => {
  return async (dispatch) => {
    await dispatch(toggleAppScreenLoader(true))
    const practicesResponse = await HomeApiHandlers.getPractices();
    if (!isEmptyOrNil(practicesResponse.data)) {
      const practices = CommonHelpers.getFormattedPractices(practicesResponse);
      dispatch({
        type: ACTION_TYPES.HOME_ACTIONS.SET_PRACTICES,
        payload: practices,
      });
    }
    await dispatch(toggleAppScreenLoader(false))
  };
};


export const setMapCoordinates = (coordinates) => {
  return async (dispatch) => {
      dispatch({
        type: ACTION_TYPES.HOME_ACTIONS.SET_MAP_COORDINATES,
        payload: coordinates,
      });
  };
};

