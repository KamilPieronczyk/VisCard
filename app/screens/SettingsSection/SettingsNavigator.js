import React, { Component } from 'react';
import { StackNavigator,  } from 'react-navigation';
import SettingsScreen from './SettingsScreen';
import EditContactScreen from './EditContactScreen';
  
const SettingsNavigator = StackNavigator({
    SettingsScreen: { screen: SettingsScreen },
    EditContactScreen: { screen: EditContactScreen },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default SettingsNavigator;