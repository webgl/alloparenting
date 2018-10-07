import { userConstants, globalConstants } from '../constants/';
import { userService } from '../services/';
import { alertActions } from './alert.actions.js';
import { changePage, handleError } from '../helpers/';

export const userActions = {
    login,
    logout,
    signup,
    validate
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user.data));
                     // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user.data));
                    dispatch(alertActions.success('Login successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(handleError(error)));

                }
            );
    };
}

function logout() {
    changePage("/")
    localStorage.removeItem('user');
    return { type: userConstants.AUTHENTICATION_FAILURE };
}

function signup(data) {
  return dispatch => {
    dispatch(request(data))
    userService.register(data)
    .then(
        user => {
          changePage('/');
          dispatch(success(user.data));
          localStorage.setItem('user', JSON.stringify(user.data));
          dispatch(alertActions.success("Welcome!"));
        }, error => {
          dispatch(failure(error));
          dispatch(alertActions.error(handleError(error)));
        }
    )
  }
}

function validate() {
    return dispatch => {
        userService.validate()
            .then(
                user => {
                    dispatch(success(user.data));
                },
                error => {
                    changePage('/')
                    dispatch(failure(error));
                    dispatch(alertActions.error("You must login or signup to continue"));
                }
            );
    };
    function success(user) { return { type: userConstants.VALIDATE_SUCCESS, user } }
}

function request(user) { return { type: globalConstants.LOADING_REQUEST, user } }
function success(user) { return { type: userConstants.AUTHENTICATION_SUCCESS, user } }
function failure(error) { return { type: userConstants.AUTHENTICATION_FAILURE, error } }
