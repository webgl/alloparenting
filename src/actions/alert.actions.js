import { alertConstants } from '../constants/';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
   return dispatch => {
      dispatch(success(message));
      setTimeout(() => {
         dispatch(alertActions.clear())
      }, 2500);
   };
   function success(message) { return { type: alertConstants.SUCCESS, message } }
}

function error(message) {
   return dispatch => {
      dispatch(error(message));
      setTimeout(() => {
         dispatch(alertActions.clear())
      }, 2500);
   };
   function error(message) { return { type: alertConstants.ERROR, message } }
}

function clear() {
   return { type: alertConstants.CLEAR };
}
