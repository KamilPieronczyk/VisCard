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
import { setUserPasswordReg } from '../../Redux/Actions/index';
import validation from '../../config/validate';
import { Form, Item, Input, Label, Button } from "native-base";


class RegisterScreen3Preload extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({      
      statusBarColor: 'transparent'
    });
    this.state= {
      password: '',
      repeatedPassword: '',
      passwordSuccess: null,
      repeatedPasswordSuccess: null,
      passwordErrorMessage: '',
      repeatedPasswordErrorMessage: '',
    }
    this.submit = this.submit.bind(this);
    this.next = this.next.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateRepeatedPassword = this.validateRepeatedPassword.bind(this);
  }  

  validatePassword(){
    let passwordSuccess = validation('password',this.state.password);
    if (!passwordSuccess ) {
      this.setState({
        passwordSuccess : true,
        passwordErrorMessage: '',
      })
      return true;
    } else {
      this.setState({
        passwordSuccess : false,
        passwordErrorMessage: passwordSuccess,
      })
      return false;
    }
  }

  validateRepeatedPassword(){
    if (this.state.repeatedPassword == this.state.password){
      this.setState({
        repeatedPasswordSuccess : true,
        repeatedPasswordErrorMessage: '',
      })
      return true
    } else {
      this.setState({
        repeatedPasswordSuccess : false,
        repeatedPasswordErrorMessage: 'password must be the same',
      })
      return false;
    }
  }
  

  next(){
    this.props.setUserPasswordReg(this.state.password);
    this.props.navigator.push({
      screen: 'LoginScreens.RegisterScreen4',
      navigatorStyle: {
        navBarHidden: true,
      },
    });
  }

  submit() {
    if (this.validatePassword() && this.validateRepeatedPassword()){
      this.next();
    }
  }

  back(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{ flex: 1,paddingTop: StatusBar.currenHeight }}>        
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
              Easy share your cards with NFC
            </Text>
          </View>
          <LoginBackButton onPress={this.back.bind(this)}/>
          <LoginCenteredButton text={"Registration"} />
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <View style={styles.inputs}>
          <Form>
              <Item
                floatingLabel
                success={this.state.passwordSuccess == true ? true : false}
                error={this.state.passwordSuccess == false ? true : false}
              >
                <Label>Password</Label>
                <Input
                  style={{
                    fontSize: 20,
                    paddingBottom: 10,
                    color: Colors.loginColors
                  }}
                  onChangeText={password => this.setState({ password: password })}
                  onBlur={this.validatePassword}
                  secureTextEntry={true}
                />
              </Item>
              <Text style={styles.errorMessage}>{this.state.passwordErrorMessage}</Text>
              <Item
                floatingLabel
                last
                success={this.state.repeatedPasswordSuccess == true ? true : false}
                error={this.state.repeatedPasswordSuccess == false ? true : false}
              >
                <Label>Repeat password</Label>
                <Input
                  style={{
                    fontSize: 20,
                    paddingBottom: 10,
                    color: Colors.loginColors
                  }}
                  onChangeText={repeatedPassword => this.setState({ repeatedPassword: repeatedPassword })}
                  onBlur={this.validateRepeatedPassword}
                  secureTextEntry={true}
                />
              </Item>
              <Text style={styles.errorMessage}>{this.state.repeatedPasswordErrorMessage}</Text>
            </Form>
            <View style={{justifyContent: 'center', alignItems: 'center'}} >
              <LoginSectionButton
              style={{ marginHorizontal: 15, marginBottom: 20, width: 100 }}
              onPress={this.submit}
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
    marginTop: 30,
  },
  logo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  errorMessage: {
    color: '#FF0000'
  }
});

const mapStateToProps = state => {
  return { color: state.password };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserPasswordReg: password => dispatch(setUserPasswordReg(password))
  };
};

export default (RegisterScreen3 = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen3Preload));
