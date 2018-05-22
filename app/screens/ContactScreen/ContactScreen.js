import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../styles/index';
import { Container, Button, Icon, Card, CardItem, Body, Text, Left, Right } from 'native-base';
import { ButtonText, SubHeading, Caption, TextTitle } from '../../components/Typography/Typography';

class ContactScreen extends Component {
  static navigatorStyle = {
    statusBarHidden: true,
  };
  constructor(props){
    super(props);
    StatusBar.setHidden(true, 'slide');
    this.back = this.back.bind(this);
  }
  back(){
    this.props.navigator.pop();
  }
  render() {
    return (
      
      <Container>
        <ImageBackground
        source={require("../../assets/112.jpeg")}
        style={styles.image}
        >
          <View style={{flexDirection: 'row'}}>
            <Button transparent onPress={this.back} >
              <Icon name="md-arrow-back" style={{color: '#fff', fontSize: 25,}}/>
            </Button>
            <Text style={{flex: 1}}></Text>
            <Button transparent style={{marginRight: 15}}>
              <Icon name="md-more" style={{color: '#fff', fontSize: 25,}}/>
            </Button>
          </View>  
          <View style={styles.title}>            
            <TextTitle color='#fff'>Name Surname</TextTitle>           
          </View>
        </ImageBackground>
        <ScrollView style={styles.container}>
          
          <Card>
            <CardItem>
              <Left>                
                <Icon name="md-call"/>               
                <Body style={styles.body} >               
                  <SubHeading>584 742 268</SubHeading>
                  <Caption>Phone number</Caption>                
                </Body>
              </Left>
              <Right style={styles.right} >                
                <Icon name="md-text" style={styles.icon} />                
              </Right>
            </CardItem>
            <CardItem style={{marginTop: -10}}>
              <Left>                
                <Icon name="md-call"/>               
                <Body style={styles.body} >               
                  <SubHeading>584 742 268</SubHeading>
                  <Caption>Phone number</Caption>                
                </Body>
              </Left>
              <Right style={styles.right} >                
                <Icon name="md-text" style={styles.icon} />                
              </Right>
            </CardItem>
            <CardItem style={{marginTop: -10}}>
              <Left>                
                <Icon name="md-mail"/>               
                <Body style={styles.body} >               
                  <SubHeading>corgicrazy@gmail.com</SubHeading>
                  <Caption>Home</Caption>                
                </Body>
              </Left>
              <Right style={styles.right} > 

              </Right>
            </CardItem>
            <CardItem style={{marginTop: -10}}>                           
              <Left>                
                <Icon name="md-pin"/>               
                <Body style={styles.body} >               
                  <SubHeading>ul. Marszałkowska 19, 42 Warszawa 40-000</SubHeading>
                  <Caption>Home</Caption>                
                </Body>
              </Left>
              <Right style={styles.right} >                
                <Icon name="md-navigate" style={[styles.icon, {color: Colors.primaryLight}]} />                
              </Right>
            </CardItem>
          </Card>
          
        </ScrollView>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250,    
  },
  container: {
    backgroundColor: Colors.grey,
    padding: 10,
    paddingTop: 5,
    flex: 1,
  },
  icon: {
    fontSize: 30,
  }, 
  body: {
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  right: {
    flex: 0,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,    
  }
});

export default ContactScreen;
