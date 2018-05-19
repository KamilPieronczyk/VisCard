import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { Typography, Colors } from '../../styles/index';

export class Display2 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : '#fff',
      textAlign: this.props.center ? 'center' : 'left',
    }    
    return (      
        <Text style={[Typography.display2, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class Display1 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : '#fff',
      textAlign: this.props.center ? 'center' : 'left',      
    }
    return (      
        <Text style={[Typography.display1, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class Headline extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.textColor,
      textAlign: this.props.center ? 'center' : 'left',
    }
    return (      
        <Text style={[Typography.headline, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class TextTitle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.textColor,
      textAlign: this.props.center ? 'center' : 'left',
    }
    return (      
        <Text style={[Typography.title, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class SubHeading extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.textColor,
      textAlign: this.props.center ? 'center' : 'left',
    }
    return (      
        <Text style={[Typography.subheading, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class TextBold extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.textColor,
      textAlign: this.props.center ? 'center' : 'left',      
    }
    return (      
        <Text style={[Typography.body2, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class TextRegular extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.textColor,
      textAlign: this.props.center ? 'center' : 'left',      
    }
    return (      
        <Text style={[Typography.body1, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class Caption extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.captionColor,
      textAlign: this.props.center ? 'center' : 'left',      
    }
    return (      
        <Text style={[Typography.caption, style, this.props.style, ]}> {this.props.children} </Text>      
    );
  }
}

export class ButtonText extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      color: this.props.color ? this.props.color : Colors.textColor,
      textAlign: this.props.center ? 'center' : 'left',      
    }
    return (      
        <Text style={[Typography.body2, style, this.props.style, ]}> {this.props.children.toUpperCase()} </Text>      
    );
  }
}
