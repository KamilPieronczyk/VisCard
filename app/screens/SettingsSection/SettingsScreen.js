import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container,Content, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Text } from 'native-base';
import { Colors } from '../../styles/index';
import { SubHeading, Caption } from '../../components/Typography/Typography';
export default class SettingsScreen extends Component {
  constructor(props){
    super(props);
    this.openEditContact = this.openEditContact.bind(this);
  }
  
  openEditContact(){
    this.props.navigation.navigate('EditContactScreen')
  }

  render() {
    return (
      <Container style={{/*paddingTop: StatusBar.currentHeight*/}}>
        <Header style={{backgroundColor: Colors.primary}}>
          <Body>
            <Title>Settings</Title>
          </Body>
        </Header>
        
        <Content style={{backgroundColor: '#fff'}}>          
          <List>
            <ListItem onPress={this.openEditContact}>   
              <Left style={styles.left} >
                <SubHeading>Contact's personal data</SubHeading>
                <Caption>Edit personal data</Caption>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>              
            </ListItem>
            <ListItem onPress={this.openEditContact}>   
              <Left style={styles.left} >
                <SubHeading>Contact's personal data</SubHeading>
                <Caption>Edit personal data</Caption>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>              
            </ListItem>
          </List>          
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    flexDirection: 'column',  
  }
});