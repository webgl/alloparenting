import { userConstants } from '../constants/';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {

    case userConstants.AUTHENTICATION_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case userConstants.AUTHENTICATION_FAILURE:
      return {};

    default:
      return state
  }
}
