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
import { Form, Item, Input, Label, Button } from "native-base";
import { setUserNameReg, setUserSurnameReg } from "../../Redux/Actions/index";
import validation from '../../config/validate';

class RegisterScreen1Preload extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({
      statusBarColor: "transparent"
    });
    this.state = {
      name: "",
      surname: "",
      successName: null,
      successSurname: null,
      nameErrorMessage: '',
      surnameErrorMessage: '',
    };
    this.submit = this.submit.bind(this);
    this.next = this.next.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateSurname = this.validateSurname.bind(this);

  }

  validateName(){
    let successName = validation('userName',this.state.name);
    if (!successName) {
      this.setState({
        successName: true,
        nameErrorMessage: '',
      })
      return true;
    } else {
      this.setState({
        successName: false,
        nameErrorMessage: successName,
      })
      return false;
    }
  }

  validateSurname(){
    let successSurname = validation('userSurname',this.state.surname);
    if (!successSurname) {
      this.setState({
        successSurname: true,
        surnameErrorMessage: '',
      });
      return true;
    } else {
      this.setState({
        successSurname: false,
        surnameErrorMessage: successSurname,
      })
      return false;      
    }
  }

  submit() {
    if (this.validateName() && this.validateSurname()){
      this.next();
    }
  }

  next() {
    this.props.setUserNameReg(this.state.name);
    this.props.setUserSurnameReg(this.state.surname);
    this.props.navigator.push({
      screen: "LoginScreens.RegisterScreen2",
      navigatorStyle: {
        navBarHidden: true
      }
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
              Easy saving your friends' contacts
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
                success={this.state.successName == true ? true : false}
                error={this.state.successName == false ? true : false}
              >
                <Label>Username</Label>
                <Input
                  style={{
                    fontSize: 20,
                    paddingBottom: 10,
                    color: Colors.loginColors
                  }}
                  onChangeText={username => this.setState({ name: username })}
                  onBlur={this.validateName}
                />
              </Item>
              <Text style={styles.errorMessage}>{this.state.nameErrorMessage}</Text>
              <Item
                floatingLabel
                last
                success={this.state.successSurname == true ? true : false}
                error={this.state.successSurname == false ? true : false}
              >
                <Label>Surname</Label>
                <Input
                  style={{
                    fontSize: 20,
                    paddingBottom: 10,
                    color: Colors.loginColors
                  }}
                  onChangeText={surname => this.setState({ surname: surname })}
                  onBlur={this.validateSurname}
                />
              </Item>
              <Text style={styles.errorMessage}>{this.state.surnameErrorMessage}</Text>
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
  return { name: state.name, surname: state.surname };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserNameReg: name => dispatch(setUserNameReg(name)),
    setUserSurnameReg: surname => dispatch(setUserSurnameReg(surname))
  };
};

export default (RegisterScreen1 = connect(mapStateToProps, mapDispatchToProps)(
  RegisterScreen1Preload
));
