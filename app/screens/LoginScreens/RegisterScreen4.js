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

class RegisterScreen4Preload extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({      
      statusBarColor: 'transparent'
    });
    this.state = {
      safePassword: this.props.password.split('').map(char=>{ return '*'}),
    }
  }  

  next(){
    // this.props.navigator.push({
    //   screen: 'LoginScreens.RegisterScreen2',
    //   navigatorStyle: {
    //     navBarHidden: true,
    //   },
    // });
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
              Check your data
            </Text>
          </View>
          <LoginBackButton onPress={this.back.bind(this)}/>
          <LoginCenteredButton text={"Data"} />
        </ImageBackground>
        <View style={{ flex: 3 }}>
          <View style={styles.inputs}>
            {/* Left side */}
            <View style={{flex: 1}} >
              <Text style={styles.textStyle} >Name:</Text>
              <Text style={styles.textStyle} >Surname:</Text>              
              <Text style={styles.textStyle} >Email:</Text>              
              <Text style={styles.textStyle} >Password:</Text>              
            </View>

            {/* Right side */}
            <View style={{flex: 2}} >
              <Text style={styles.textStyle} >{this.props.name}</Text>
              <Text style={styles.textStyle} >{this.props.surname}</Text>
              <Text style={styles.textStyle} >{this.props.email}</Text>
              <Text style={styles.textStyle} >{this.state.safePassword}</Text>
            </View>
            
            
          </View>   
          <View style={{justifyContent: 'center', alignItems: 'center'}} >
              <LoginSectionButton
              style={{ marginHorizontal: 15, marginBottom: 20, width: 185 }}
              onPress={this.next.bind(this)}
              text={"Create account"}
              />
          </View>       
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    //flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
    flexDirection: 'row',
    paddingVertical: 30,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: Colors.loginColors,
    marginBottom: 10,
  },
  logo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return { 
    name: state.name,
    surname: state.surname,
    email: state.email,
    password: state.password,
   };
};

export default (RegisterScreen4 = connect(mapStateToProps)(RegisterScreen4Preload));
