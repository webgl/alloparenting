import axios from 'axios';
import { API_URL } from '../constants/';
import { UserAuthHeader } from '../helpers/';

export const userService = {
    login,
    logout,
    register,
    validate
};

function login(email, password) {
   // Email authentication. Requires email and password as params.
   // This route will return a JSON representation of the User model on
   // successful login along with the access-token and client in the header
   // of the response.
    const requestOptions = {
        email: email,
        password: password
    };

    return axios.post(`${API_URL}/auth/sign_in`, requestOptions).then(handleResponse)
}

function logout(data) {
    // remove user from local storage to log user out
    // Use this route to end the user's current session.
    // This route will invalidate the user's authentication token.
    // NOTE: You must pass in uid, client, and access-token in the request headers.
    localStorage.removeItem('user');
    return axios.delete(`${API_URL}/auth/sign_out`, data).then(handleResponse)
}

function register(data) {
    return axios.post(`${API_URL}/auth/sign_up`, data).then(handleResponse)
}

function validate() {
   // Use this route to validate tokens on return visits to the client.
   // NOTE: Requires uid, client, and access-token as params.
   // These values should correspond to the columns in your User table of
   // the same names.
   return axios.get(`${API_URL}/auth/validate`, UserAuthHeader()).then(handleResponse)
}


function handleResponse(response) {
    if (response.status !== 200) {
        return Promise.reject(response);
    }
    return response;
}
