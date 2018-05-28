import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, ImageBackground, StatusBar } from 'react-native';
import { Container, Content, Footer, Left, Icon } from "native-base";
import ContactIcon from "../../components/IconButton/IconButtons";
import { Colors } from "../../styles/index";
import { Navigation } from 'react-native-navigation';
import { TextTitle } from "../../components/Typography/Typography";

class AdressScreen extends Component {
    static navigatorStyle = {
        drawUnderStatusBar: true,
    };
 constructor(props){
    super(props);    
    this.props.navigator.setStyle({
    statusBarColor: "transparent",
    });    
    StatusBar.setTranslucent(true);
    this.back = this.back.bind(this);
 }
 back(){
     
 }
  render() {
    return (      
      <ImageBackground style={styles.container} source={require('./../../assets/itemsBackgrounds/adress.png')}>
        {/* <Image source={require('./../../assets/PinIcon.png')} /> */}
        <Icon name="md-pin" style={styles.icon} />
        <View style={styles.formContainer}>
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.saveButton}>
                    <TextTitle color="#fff" center >Save</TextTitle>
                </View>
            </TouchableNativeFeedback>
        </View>
        <View style={styles.backButton}>
            <Icon name="md-arrow-back" style={styles.backButtonArrow} />
        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },       
    icon: {
        color: Colors.adressColor,
        fontSize: 160, 
        textAlign: 'center', 
        marginTop: 80,
        marginBottom: 35,
    },
    formContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingTop: 80,
        height: 320,       
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 80, 
    },
    saveButton: {        
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: Colors.adressColor,
        height: 40,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    backButton: {
        justifyContent: 'center',
        position: 'absolute',
        left: 20,
        bottom: 20,
        height: 32,
        width: 32,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#fff',
    },
    backButtonArrow: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 26,
    }
});

export default AdressScreen;

