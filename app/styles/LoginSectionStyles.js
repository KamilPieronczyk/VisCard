import {Colors} from './index';
import {Dimensions} from 'react-native'

export const LoginSectionStyles = {
  backButton: {
    backgroundColor: Colors.loginPrimaryColor,
    height: 40,
    borderRadius: 20,
    width: 40,
    position: "absolute",
    bottom: -20,
    left: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  centeredButtun: {
    backgroundColor: Colors.loginPrimaryColor,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 40,
    position: "absolute",
    bottom: -20,
    left: Dimensions.get('window') / 2,
    justifyContent: "center",
    alignItems: "center",
  }
};
