import { combineReducers } from 'redux';
import { alert } from './alert.reducer.js';
import { authentication } from './authentication.reducer.js';
import { page } from './page.reducer.js';
 
export default combineReducers({
  alert,
  authentication,
  page,
})
