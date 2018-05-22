import { Navigation } from 'react-native-navigation';
import registerApp from './config/screens';
import { Provider } from 'react-redux';
import store from './Redux/Stores';


export class App {
  constructor(){
    registerApp(store, Provider);
    this.initializeApp();
  }

  initializeApp(){
    Navigation.startSingleScreenApp({
      screen: {
        //screen: 'LoginScreens.LoginScreen', // unique ID registered with Navigation.registerScreen
        screen: 'HomeTabs', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {
          navBarHidden: true,
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    });
  }
  
}
