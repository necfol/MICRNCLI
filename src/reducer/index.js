import { combineReducers } from 'redux';
import nav from './nav.js'
import recommend from './recommend.js'
import rank from './rank.js'
import cd from './cd.js'
const AppReducer = combineReducers({
  nav,
  recommend,
  rank,
  cd
});

export default AppReducer;