/* eslint global-require: 0 */
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialNavState } from './reducer/index.js';
const middlewares = [thunk];
let md;
if (__DEV__) {
  md =  (
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  md = applyMiddleware(...middlewares);
}

export default function configureStore(initialNavState) {
  const store = createStore(reducer, initialNavState, md);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducer/index.js').default);
    });
  }
  return store;
}