import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LoginSectionStyles } from "../../styles/LoginSectionStyles";
import { PropTypes } from "prop-types";

class LoginCenteredButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={LoginSectionStyles.centeredButtun}>
        <Text style={{ fontSize: 20 }}>{this.props.text}</Text>
      </View>
    );
  }
}

LoginCenteredButton.propTypes = {
  text: PropTypes.string
};

export default LoginCenteredButton;
