import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet,PanResponder, Animated } from 'react-native';
import { Container, Header, Button, Icon, Title, Left, Body, Right, Content, Item, Input, Label } from 'native-base';
import { Colors } from '../../styles/index';
import { ButtonText, Display1, Caption, TextBold } from '../../components/Typography/Typography';

class AddContactManualyScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({      
      statusBarColor: Colors.primary,            
    });
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(Colors.primary);   
    
    this.state = {
      lastDy: 0,
      dy: 0,
    }
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
        let dy = gestureState.dy + this.state.lastDy;
        if (dy > 270) {
          dy = 270;
        } else {
          if (dy < -200) {
            dy = -200;
          }
        }

        this.setState({dy: dy});
      },

      onPanResponderRelease: (e, {vx, vy, dy}) => {
        if (dy > 270) {
          dy = 270;
        } else {
          if (dy < -200) {
            dy = -200;
          }
        }
        this.setState({lastDy: dy})
      }
    });
  }

  render() {
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateY: this.state.dy}]};

    return (      
      <Container>
        <Content>
          <View style={{flexDirection: 'row'}}>
            <Button transparent>
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
          <TextBold style={styles.header} color="#fff">Add data to your contact</TextBold>
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
    bottom: -200,
    left: 0,
    right: 0,
    height: 500,
    backgroundColor: '#ddd',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.primary,
    height: 31,
    paddingLeft: 30,
    paddingTop: 7,
  }
})
