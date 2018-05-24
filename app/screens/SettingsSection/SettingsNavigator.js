import React, { Component } from 'react';
import { StackNavigator,  } from 'react-navigation';
import SettingsScreen from './SettingsScreen';
import EditContactScreen from './EditContactScreen';
import EditNickScreen from './EditNickScreen';
  
const SettingsNavigator = StackNavigator({
    SettingsScreen: { screen: SettingsScreen },
    EditContactScreen: { screen: EditContactScreen },
    EditNickScreen: { screen: EditNickScreen },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default SettingsNavigator;