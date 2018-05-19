import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Colors } from '../../styles/index';
import { Icon } from 'native-base';
import { PropTypes } from "prop-types";

class ContactIcon extends Component {
  constructor(props){
    super(props);
  }

  render() {    
    return (
        <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={[styles.container, this.props.styles]}>
            <View style={[styles.iconBox, {borderColor: this.props.color}]}>
                <Icon name={this.props.icon} style={[styles.icon, {color: this.props.color,}]} />
            </View>
            <Text style={[styles.text, {color: this.props.color}]}>{this.props.children}</Text>            
        </View>      
        </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 9,
        marginTop: 15,
        width: 96,        
    },
    iconBox: {
        height: 96,
        width: 96,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 5,
        borderRadius: 25,
    },
    icon: {
        fontSize: 60,        
    },
    text: {
        fontSize: 11,
        fontFamily: 'Roboto',
        textAlign: 'center',        
    }
});

ContactIcon.defaultProps = {
    color: '#000',
    icon: 'md-bug'
}

ContactIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
};

export default ContactIcon;
