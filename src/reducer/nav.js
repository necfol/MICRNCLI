import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../routerConfig.js';
const homeAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(homeAction);
const chatAction = AppNavigator.router.getActionForPathAndParams('Chat');
const initialNavState = AppNavigator.router.getStateForAction(
  homeAction
);
export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Chat':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Chat' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}