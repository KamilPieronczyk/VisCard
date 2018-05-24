import React, { Component } from 'react';
import { StatusBar, StyleSheet, Switch } from 'react-native';
import { Container,Content, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Text,Form, Item, Input, Label } from 'native-base';
import { Colors } from '../../styles/index';
import { SubHeading, Caption, TextBold } from '../../components/Typography/Typography';
export default class EditNickScreen extends Component {

  constructor(props){
    super(props);    
    this.back = this.back.bind(this);
    this.state = {
      switch: true,
    }
  }

  back(){
    this.props.navigation.pop()
  }

  render() {
    return (
      <Container style={{backgroundColor: Colors.backgroundGrey}}>
        <Header style={{backgroundColor: Colors.primary}}>
          <Left>
            <Button transparent onPress={this.back} >
              <Icon name='md-close' color="#fff" />
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>
          <Right />
        </Header>
        
        <Content style={{backgroundColor: Colors.backgroundGrey}}>   
          <Form style={{paddingHorizontal: 15}}>
            <Item stackedLabel last style={{borderBottomColor: Colors.primary}}>
              <Label>Nick</Label>
              <Input />
            </Item>
          </Form>
          <List>  
            <ListItem style={styles.listItem}>   
              <Left style={styles.left} >
                <TextBold>Present me with my nick</TextBold>
                <Caption>This contact will be displaying with his nick</Caption>
              </Left>
              <Right style={{flex: 0}}>
                <Switch 
                  onTintColor="#CE96E7" 
                  thumbTintColor={this.state.switch ? Colors.primary : null} 
                  value={this.state.switch}  
                  onValueChange={()=>{this.setState({switch: !this.state.switch})}} 
                />
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
  },
  listItem: {
    backgroundColor: '#fff',    
    marginLeft: 0,
    paddingLeft: 15,
  }
});