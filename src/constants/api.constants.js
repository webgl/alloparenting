let backendHost;
let stripe_key;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;
if (hostname === 'localhost') {
  backendHost = 'http://localhost:3000';
} else {
  backendHost = 'https://digital-par-api.herokuapp.com';
}

export const API_URL = `${backendHost}/api/${apiVersion}`;
export const STRIPE_API_PUBLIC_KEY  = stripe_key
