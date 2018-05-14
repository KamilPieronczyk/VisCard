import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Colors } from '../../../styles/index';
export default class ShareScreen extends Component {
  render() {
    return (
      <Container style={{/*paddingTop: StatusBar.currentHeight*/}}>
        <Header style={{backgroundColor: Colors.primary}}>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}