
import { pathOr} from 'ramda';
import AsyncStorageService from '../AsyncStorageService';
import {APP_CONSTANTS} from '../../Constants';
import NavigationService from '../NavigationService';
import {APP_ROUTES} from '../../Navigation';



const logoutOn401 = (error: any) => {
  const status = pathOr(0, ['response', 'status'], error) as number;
  switch (status) {
    case 401:
      AsyncStorageService.removeKeyFromAsyncStorage(APP_CONSTANTS.AUTH_TOKEN);
      // AppNotification.toggleErrorNotification({
      //   message: 'Session Expired',
      //   description: 'Please log in again.',
      //   duration: 5000,
      // });

      setTimeout(() => {
        NavigationService.resetStack(APP_ROUTES.HOME_SCREEN);
      }, 500);
      return;
    default:
      console.log('unknown error', error);
      return;
  }
};

export default {
  logoutOn401,
};
