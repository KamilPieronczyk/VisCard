import { Navigation } from 'react-native-navigation';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import RegisterScreen1 from '../screens/LoginScreens/RegisterScreen1';
import RegisterScreen2 from '../screens/LoginScreens/RegisterScreen2';
import RegisterScreen3 from '../screens/LoginScreens/RegisterScreen3';


export default (store, Provider) => {
  Navigation.registerComponent('LoginScreens.LoginScreen', () => LoginScreen, store, Provider);    
  Navigation.registerComponent('LoginScreens.RegisterScreen1', () => RegisterScreen1, store, Provider);  
  Navigation.registerComponent('LoginScreens.RegisterScreen2', () => RegisterScreen2, store, Provider);  
  Navigation.registerComponent('LoginScreens.RegisterScreen3', () => RegisterScreen3, store, Provider);  
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);  
};