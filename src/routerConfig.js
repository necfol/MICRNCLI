import { StackNavigator } from 'react-navigation';
import HomeScreen from './container/Home.js';
import ChatScreen from './container/Chat.js';
export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});
