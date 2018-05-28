import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, ImageBackground } from 'react-native';
import { Container, Content, Footer, Left } from "native-base";
import ContactIcon from "../../components/IconButton/IconButtons";
import { Colors } from "../../styles/index";
import { Navigation } from 'react-native-navigation';

class ModalIconScreen extends Component {
 constructor(props){
     super(props);    
    this.close = this.close.bind(this);
 }
 close(){
    Navigation.dismissLightBox();
 }
  render() {
    return (      
      <ImageBackground style={styles.container} source={require('./../../assets/Blur.png')}>
          
          <Content>  
            <View style={styles.iconBox}>
            <ContactIcon icon="md-call" color={Colors.phoneColor} >Phone number</ContactIcon>
            <ContactIcon icon="md-mail" color={Colors.emailColor} >Email adress</ContactIcon>
            <ContactIcon icon="md-pin"  color={Colors.adressColor}>Home adress</ContactIcon>
            <ContactIcon icon="md-link" color={Colors.webColor}   >Web adress</ContactIcon>
            <ContactIcon icon="md-text" color={Colors.noticeColor}>Notice</ContactIcon>
            </View>           
          </Content>
          <TouchableNativeFeedback
            onPress={this.close}
            background={TouchableNativeFeedback.SelectableBackground()}>
                <Image source={require('./../../assets/arrowBack.png')} style={styles.arrowBack} />
          </ TouchableNativeFeedback>
          
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },       
    iconBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    arrowBack: {
        position: 'absolute',
        bottom: 22,
        left: 18,
    }
});

export default ModalIconScreen;

