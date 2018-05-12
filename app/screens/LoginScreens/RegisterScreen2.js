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
import validation from '../../config/validate';
import { Form, Item, Input, Label, Button } from "native-base";


class RegisterScreen2Preload extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({
      statusBarColor: "transparent"
    });
    this.state = {
      email: '',
      emailSuccess: null,
      emailErrorMessage: '',
    }
    this.validateEmail = this.validateEmail.bind(this);
    this.submit = this.submit.bind(this);
    this.next = this.next.bind(this);
  }

  validateEmail(){
    let emailSuccess = validation('email',this.state.email);
    if (!emailSuccess ) {
      this.setState({
        emailSuccess : true,
        emailErrorMessage: '',
      })
      return true;
    } else {
      this.setState({
        emailSuccess : false,
        emailErrorMessage: emailSuccess,
      })
      return false;
    }
  }

  submit() {
    if (this.validateEmail()){
      this.next();
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
          <Form>
              <Item
                floatingLabel
                success={this.state.emailSuccess == true ? true : false}
                error={this.state.emailSuccess == false ? true : false}
              >
                <Label>Email</Label>
                <Input
                  style={{
                    fontSize: 20,
                    paddingBottom: 10,
                    color: Colors.loginColors
                  }}
                  onChangeText={email => this.setState({ email: email })}
                  onBlur={this.validateEmail}
                />
              </Item>
              <Text style={styles.errorMessage}>{this.state.emailErrorMessage}</Text>
            </Form>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
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
    marginTop: 30
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
