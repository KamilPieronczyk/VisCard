import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Colors } from "../../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import LoginSectionButton from "../../components/LoginSectionComponents/Button";

class LoginScreenPreload extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({      
      statusBarColor: 'transparent'
    });
    this.openHomeScreen = this.openHomeScreen.bind(this);
  }

  openHomeScreen(){
    this.props.navigator.push({
      screen: 'HomeScreen',
      navigatorStyle: {
        navBarHidden: true,
      },
      animationType: 'none'
    });
  }

  openRegister(){
    this.props.navigator.push({
      screen: 'LoginScreens.RegisterScreen1',
      navigatorStyle: {
        navBarHidden: true,
      },
      animationType: 'slide-horizontal'
    });
  }

  render() {
    return (
      <ImageBackground
        source={require("../../images/LoginBackground.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          paddingTop: StatusBar.currenHeight
        }}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}          
          barStyle="dark-content"
        />
        <View style={styles.logo}>
          <Text
            style={{
              fontSize: 65,
              color: Colors.loginColors,
              fontWeight: "500",
              fontFamily: "Roboto"
            }}
          >
            VisCard
          </Text>
        </View>

        <View style={styles.inputs}>
          <TextInput
            style={{ fontSize: 20, paddingBottom: 30, marginBottom: 0 }}
            placeholder={"Login"}
            underlineColorAndroid={Colors.loginColors}
            placeholderTextColor={Colors.loginColors}
          />
          <TextInput
            style={{ fontSize: 20, marginTop: 0 }}
            placeholder={"Password"}
            underlineColorAndroid={"rgba(0,0,0,0)"}
            placeholderTextColor={Colors.loginColors}
            secureTextEntry={true}
          />

          <LoginSectionButton text={"Log in"} onPress={this.openHomeScreen}/>

          <TouchableOpacity onPress={this.openRegister.bind(this)}>
            <Text
              style={{ fontSize: 13, color: Colors.loginColors, marginTop: 10 }}
            >
              Don't you have an account yet?{" "}
              <Text style={{ fontWeight: "500" }}>Sign up now</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary
  },
  inputs: {
    flex: 3,
    paddingLeft: 60,
    paddingRight: 60
  },
  logo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return { color: state.color };
};

export default (LoginScreen = connect(mapStateToProps)(LoginScreenPreload));
