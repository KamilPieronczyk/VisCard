import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container,Content, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Text, Fab } from 'native-base';
import { Colors } from '../../styles/index';
import { SubHeading, Caption, TextBold } from '../../components/Typography/Typography';
import { Navigation } from 'react-native-navigation';

export default class EditContactScreen extends Component {

  constructor(props){
    super(props);    
    this.back = this.back.bind(this);
    this.openEditNick = this.openEditNick.bind(this);
    this.opneModal = this.opneModal.bind(this);
  }

  openEditNick(){
    this.props.navigation.navigate('EditNickScreen')
  }

  back(){
    this.props.navigation.pop()
  }

  opneModal(){
    Navigation.showLightBox({
      screen: 'ModalIconScreen', // unique ID registered with Navigation.registerScreen
      style: {
        backgroundBlur: 'xlight', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
        backgroundColor: '#ffffff80', // tint color for the background, you can specify alpha here (optional)
        tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
      }
    });
  }

  render() {
    return (
      <Container style={{/*paddingTop: StatusBar.currentHeight*/}}>
        <Header style={{backgroundColor: Colors.primary}}>
          <Left>
            <Button transparent onPress={this.back} >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Edit Contact</Title>
          </Body>
          <Right />
        </Header>
        
        <Content style={{backgroundColor: '#fff'}}>          
          <List>   

            {/* Personal data */}
            <ListItem itemDivider> 
              <TextBold color={Colors.primaryLight}>Personal data</TextBold>
            </ListItem>          
            <ListItem onPress={this.openEditNick}>   
              <Left style={styles.left} >
                <SubHeading>Nick</SubHeading>
                <Caption>Set contact nick</Caption>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>              
            </ListItem>
            <ListItem>   
              <Left style={styles.left} >
                <SubHeading>Name and Surname</SubHeading>
                <Caption>Set name and Surname</Caption>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>              
            </ListItem>

            {/* Additional fields */}
            <ListItem itemDivider> 
              <TextBold color={Colors.primaryLight}>Additional fields</TextBold>
            </ListItem>  
            <ListItem>   
              <Left style={styles.left} >
                <SubHeading>Second phone number</SubHeading>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>              
            </ListItem>
            <ListItem>   
              <Left style={styles.left} >
                <SubHeading>Notice - password</SubHeading>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>              
            </ListItem>
          </List>          
        </Content>
        <Fab
            style={{ backgroundColor: Colors.primaryLight, height: 40, width: 40 }}
            position="bottomRight"
            onPress={this.opneModal} >
            <Icon name="md-add" />
        </Fab>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    flexDirection: 'column',  
  }
});