import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LoginSectionStyles } from "../../styles/LoginSectionStyles";
import { PropTypes } from "prop-types";

class LoginBackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={LoginSectionStyles.backButton}
        onPress={this.props.onPress}
      >
        <Icon name="arrow-back" size={24} color="#000000" />
      </TouchableOpacity>
    );
  }
}

LoginBackButton.propTypes = {
  onPress: PropTypes.func
};

export default LoginBackButton;
