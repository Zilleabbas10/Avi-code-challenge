import {axiosInstance} from './api.config';
import APP_ENDPOINTS from './endpoints';
import ApiHelpers from './helpers';

const getPractices = async () => {
  try {
    const response = await axiosInstance.get(APP_ENDPOINTS.GET_PRACTICES);
    return {...response};
  } catch (error) {
    ApiHelpers.logoutOn401(error);
    return {error, data: null};
  }
};

export default {
  getPractices,
};
