import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "../../styles/index";
import { PropTypes, defaultProps } from "prop-types";

class LoginSectionButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            height: 40,
            marginTop: 10,
            backgroundColor: this.props.backgroundColor
          },
          this.props.style
        ]}
        onPress={this.props.onPress}
      >
        <Text style={{ fontSize: 21, color: "#000000" }}>
          {this.props.text}
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}

LoginSectionButton.defaultProps = {
  backgroundColor: Colors.loginPrimaryColor
};

LoginSectionButton.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func
};

export default LoginSectionButton;
