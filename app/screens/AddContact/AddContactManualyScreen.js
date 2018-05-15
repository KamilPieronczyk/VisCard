import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container, Header, Button, Icon, Title, Left, Body, Right, Content } from 'native-base';
import { Colors } from '../../styles/index';

class AddContactManualyScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setStyle({      
      statusBarColor: Colors.primary
    });
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(Colors.primary);
  }
  render() {
    return (      
      <Container>
        <Content>
          <View style={{flexDirection: 'row'}}>
            <Button transparent>
              <Icon name="md-close" style={{color: Colors.darkGrey}}/>
            </Button>
            <Text style={{flex: 1}}></Text>
            <Button transparent style={{marginRight: 15}}>
              <Text style={{fontFamily: 'Roboto_medium', fontSize: 14, color: Colors.secondary}}>SAVE</Text>
            </Button>
          </View>
            
         
            
          
        </Content>
           
        
      </Container>      
    );
  }
}

export default AddContactManualyScreen;
