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
import { Colors } from "../../styles/index";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import LoginSectionButton from "../../components/LoginSectionComponents/Button";
import LoginBackButton from "../../components/LoginSectionComponents/backButton";
import LoginCenteredButton from "../../components/LoginSectionComponents/centeredButton";
import { setUserEmailReg } from '../../Redux/Actions/index';

class RegisterScreen2Preload extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({
      statusBarColor: "transparent"
    });
    this.state = {
      email: '',
    }
  }

  next() {
    this.props.setUserEmailReg(this.state.email);
    this.props.navigator.push({
      screen: 'LoginScreens.RegisterScreen3',
      navigatorStyle: {
        navBarHidden: true,
      },
    });
  }

  back() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: StatusBar.currenHeight }}>
        <ImageBackground
          source={require("../../images/LoginBackground.png")}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="dark-content"
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20
            }}
          >
            <Text
              style={{
                fontSize: 38,
                color: Colors.loginColors,
                alignContent: "center",
                textAlign: "center"
              }}
            >
              Create your own amazing visiting cards
            </Text>
          </View>
          <LoginBackButton onPress={this.back.bind(this)} />
          <LoginCenteredButton text={"Registration"} />
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <View style={styles.inputs}>
            <TextInput
              style={{ fontSize: 20, paddingBottom: 10 }}
              placeholder={"Email"}
              underlineColorAndroid={Colors.loginColors}
              placeholderTextColor={Colors.loginColors}
              onChangeText={(email)=>this.setState({email: email})}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            <LoginSectionButton
              style={{ marginHorizontal: 15, marginBottom: 20, width: 100 }}
              onPress={this.next.bind(this)}
              text={"Next"}
            />
          </View>
          </View>          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30
  },
  logo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return { color: state.email };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserEmailReg: email => dispatch(setUserEmailReg(email))
  };
};

export default (RegisterScreen2 = connect(mapStateToProps,mapDispatchToProps)(
  RegisterScreen2Preload
));
