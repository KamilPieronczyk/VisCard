import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';

class LatestContacts extends Component {
  render() {
    return (
        <Content>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../../assets/26.jpg')}/>
            </Left>
            <Body>
              <Text>Jan Kowalski</Text>
              <Text note>957 485 325</Text>
            </Body>
            <Right style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="md-more" style={{fontSize: 30}} />
            </Right>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default LatestContacts;
