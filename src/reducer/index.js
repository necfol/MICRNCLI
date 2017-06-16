import { combineReducers } from 'redux';
import nav from './nav.js'
import recommend from './recommend.js'
const AppReducer = combineReducers({
  nav,
  recommend
});

export default AppReducer;