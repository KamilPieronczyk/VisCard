import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet,PanResponder, Animated } from 'react-native';
import { Container, Header, Button, Icon, Title, Left, Body, Right, Content, Item, Input, Label } from 'native-base';
import { Colors } from '../../styles/index';
import { ButtonText, Display1, Caption, TextBold, TextTitle, SubHeading } from '../../components/Typography/Typography';
import ContactIcon from '../../components/IconButton/IconButtons';

class AddContactManualyScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({      
      statusBarColor: Colors.primary,            
    });
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(Colors.primary);   
    
    this.state = {
      dy: 0,
      translateY: new Animated.Value(0),
    }

    this.back = this.back.bind(this);
  }  

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // Initially, set the value of x and y to 0 (the center of the screen)
      onPanResponderGrant: (e, gestureState) => {
        
      },

      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: (e, gestureState) => {
        let dy = gestureState.dy;
        if (dy > 265) {
          dy = 265;
        } else {
          if (dy < 0) {
            dy = 0;
          }
        }
        if (dy < 150) Animated.spring(this.state.translateY, { toValue: dy/2 }).start();
        if (dy > 150) Animated.spring(this.state.translateY, { toValue: 265 }).start();
      },

      onPanResponderRelease: (e, {vx, vy, dy}) => {
        if (dy > 150) Animated.spring(this.state.translateY, { toValue: 265 }).start();
        if (dy < 150) Animated.spring(this.state.translateY, { toValue: 0 }).start();
      }
    });
  }

  back(){
    this.props.navigator.pop();
  }

  save(){

  }

  render() {
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateY: this.state.translateY }]};

    return (      
      <Container>
        <Content>
          <View style={{flexDirection: 'row'}}>
            <Button transparent onPress={this.back} >
              <Icon name="md-close" style={{color: Colors.darkGrey}}/>
            </Button>
            <Text style={{flex: 1}}></Text>
            <Button transparent style={{marginRight: 15}}>
              <ButtonText color={Colors.secondary}>save</ButtonText>
            </Button>
          </View>  

          <View style={styles.headText}>
            <Display1 center color={Colors.secondary}>Add new contact to your phone book</Display1>
          </View>
          <Caption center>Later you can merge it with a VisCard contact</Caption>
          <View style={styles.inputsBox}>
            <Item inlineLabel style={styles.inputItem}>
              <Label>Name:</Label>
              <Input />
              <Icon name="md-close" />              
            </Item>
            <Item inlineLabel style={styles.inputItem}>
              <Label>Phone number:</Label>
              <Input />
              <Icon name="md-close" />
            </Item>
            <Item inlineLabel last style={styles.inputItem}>
              <Label>Email adress:</Label>
              <Input />
              <Icon name="md-close" />
            </Item>
          </View>
        </Content>  

        <Animated.View style={[styles.buttonsModal, imageStyle]} {...this._panResponder.panHandlers}>
          <SubHeading style={styles.header} color="#fff">Add data to your contact</SubHeading>
          <View style={styles.iconBox}>
            <ContactIcon icon="md-call" color={Colors.phoneColor} >Phone number</ContactIcon>
            <ContactIcon icon="md-mail" color={Colors.emailColor} >Email adress</ContactIcon>
            <ContactIcon icon="md-pin"  color={Colors.adressColor}>Home adress</ContactIcon>
            <ContactIcon icon="md-link" color={Colors.webColor}   >Web adress</ContactIcon>
            <ContactIcon icon="md-text" color={Colors.noticeColor}>Notice</ContactIcon>
          </View>          
        </Animated.View>      
        
      </Container>      
    );
  }
}

export default AddContactManualyScreen;

const styles = StyleSheet.create({
  headText: {
    paddingHorizontal: 45,
    paddingBottom: 15,
  },
  inputsBox: {
    padding: 15,
  },
  inputItem: {
    marginBottom: 5,
  },
  buttonsModal: {
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.primary,
    height: 35,
    paddingLeft: 30,
    paddingTop: 7,
  },
  iconBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
