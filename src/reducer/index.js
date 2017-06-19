import { combineReducers } from 'redux';
import nav from './nav.js'
import recommend from './recommend.js'
import rank from './rank.js'
const AppReducer = combineReducers({
  nav,
  recommend,
  rank
});

export default AppReducer;