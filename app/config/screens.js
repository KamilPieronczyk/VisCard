import { Navigation } from 'react-native-navigation';

import LoginScreen from '../screens/LoginScreens/LoginScreen';
import RegisterScreen1 from '../screens/LoginScreens/RegisterScreen1';
import RegisterScreen2 from '../screens/LoginScreens/RegisterScreen2';
import RegisterScreen3 from '../screens/LoginScreens/RegisterScreen3';
import RegisterScreen4 from '../screens/LoginScreens/RegisterScreen4';

import HomeScreen from '../screens/HomeSection/Contacts/HomeScreen';
import MainScreenNavigator from '../screens/HomeSection/HomeTabs';
import AddContactManualyScreen from '../screens/AddContact/AddContactManualyScreen';
import ContactScreen from '../screens/ContactScreen/ContactScreen';
import ModalIconScreen from "../screens/ModalIconScreen/ModalIconScreen";
import AdressScreen from "../screens/AddDataItems/AdressScreen";

export default (store, Provider) => {
  Navigation.registerComponent('LoginScreens.LoginScreen', () => LoginScreen, store, Provider);    
  Navigation.registerComponent('LoginScreens.RegisterScreen1', () => RegisterScreen1, store, Provider);  
  Navigation.registerComponent('LoginScreens.RegisterScreen2', () => RegisterScreen2, store, Provider);  
  Navigation.registerComponent('LoginScreens.RegisterScreen3', () => RegisterScreen3, store, Provider);  
  Navigation.registerComponent('LoginScreens.RegisterScreen4', () => RegisterScreen4, store, Provider);  
  Navigation.registerComponent('HomeScreen', () => HomeScreen);  
  Navigation.registerComponent('HomeTabs', () => MainScreenNavigator);  
  Navigation.registerComponent('AddContactManualyScreen', () => AddContactManualyScreen);  
  Navigation.registerComponent('ContactScreen', () => ContactScreen);  
  Navigation.registerComponent('ModalIconScreen', () => ModalIconScreen);  
  Navigation.registerComponent('AdressScreen', () => AdressScreen);  
};