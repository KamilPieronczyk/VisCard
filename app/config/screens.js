import { Navigation } from 'react-native-navigation';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import LoginScreen from '../screens/LoginScreens/LoginScreen';

export default (store, Provider) => {
  Navigation.registerComponent('LoginScreens.LoginScreen', () => LoginScreen, store, Provider);    
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);  
};