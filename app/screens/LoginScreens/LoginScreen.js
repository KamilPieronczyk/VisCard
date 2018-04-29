import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> LoginScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
    }
  });

export default LoginScreen;
