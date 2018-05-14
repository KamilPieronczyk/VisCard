import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { StatusBar } from 'react-native';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import HomeScreen from './Contacts/HomeScreen';
import ShareScreen from './ShareScreens/ShareScrren';
import {Colors } from '../../styles/index';
export default (MainScreenNavigator = TabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    ShareScreen: { screen: ShareScreen }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarComponent: props => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(Colors.primary);
        const styles = {
            FooterIcon: {
              color: '#555'
            },
            FooterIconActive: {
              color: Colors.primary
            }
        }
      return (
        <Footer style={{height: 45}}>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button
              onPress={() => props.navigation.navigate("HomeScreen")}>
              {props.navigationState.index === 0 ? 
                <Icon name="md-contacts" style={styles.FooterIconActive}/> 
              :
                <Icon name="md-contacts" style={styles.FooterIcon}/>   
              }
            </Button>
            <Button
              onPress={() => props.navigation.navigate("ShareScreen")}>
              {props.navigationState.index === 1 ? 
                <Icon name="md-share" style={styles.FooterIconActive}/> 
              :
                <Icon name="md-share" style={styles.FooterIcon}/>   
              }
            </Button>
            <Button
              onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="md-person" style={styles.FooterIcon}/>   
            </Button>
            <Button
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="md-settings" style={styles.FooterIcon}/>  
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));