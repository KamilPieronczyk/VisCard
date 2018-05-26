import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {Colors} from '../../../styles/index';
import { Container,Content, Footer,FooterTab,Icon,Button, Header, Tab, Tabs, ScrollableTab, Text, Fab, Col } from 'native-base';
import LatestContacts from './LatestContacts';
class HomeScreen extends Component {
    static navigatorStyle = {
        statusBarColor: Colors.primary,
    };
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(Colors.primary);
        this.state = {
          active: false,
        }
        this.openAddContactManualy = this.openAddContactManualy.bind(this);
    }
    openAddContactManualy(){
      this.props.screenProps.navigator.push({
        screen: 'AddContactManualyScreen',
        navigatorStyle: {
          navBarHidden: true,
        },
        animationType: 'none'
      });
    }
    render() {
      const { navigator } = this.props.screenProps;
      return (
        <Container style={{/*paddingTop: StatusBar.currentHeight*/}}>
        <Tabs renderTabBar={()=> <ScrollableTab style={{backgroundColor: Colors.primary}}/> } >
          <Tab heading="Latest" tabStyle={styles.TabStyle} activeTabStyle={styles.TabStyle} textStyle={styles.TabTextStyle} activeTextStyle={styles.ActiveTabTextStyle}>
          <LatestContacts navigator={navigator} />         
          </Tab>
          <Tab heading="Family" tabStyle={styles.TabStyle} activeTabStyle={styles.TabStyle} textStyle={styles.TabTextStyle} activeTextStyle={styles.ActiveTabTextStyle}>
            <Text></Text>
          </Tab>
          <Tab heading="Friends" tabStyle={styles.TabStyle} activeTabStyle={styles.TabStyle} textStyle={styles.TabTextStyle} activeTextStyle={styles.ActiveTabTextStyle}>
            <Text>Tab 2</Text>
          </Tab>
          <Tab heading="Oders" tabStyle={styles.TabStyle} activeTabStyle={styles.TabStyle} textStyle={styles.TabTextStyle} activeTextStyle={styles.ActiveTabTextStyle}>
            <Text>Tab 2</Text>
          </Tab>
        </Tabs>        

        <Fab
            style={{ backgroundColor: Colors.primary }}
            position="bottomRight"
            direction="up"
            active={this.state.active}
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="md-person-add" />           
            <Button style={{ backgroundColor: Colors.secondary }} onPress={this.openAddContactManualy}>
              <Icon name="md-add" />
            </Button> 
            <Button style={{ backgroundColor: Colors.primary }}>
              <Icon name="md-add" />
            </Button> 
          </Fab>

        {/* <Footer style={{height: 45}}>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button>
              <Icon name="md-contacts" style={styles.FooterIconActive}/>              
            </Button>
            <Button>
              <Icon name="md-share" style={styles.FooterIcon}/>              
            </Button>
            <Button>
              <Icon name="md-person" style={styles.FooterIcon}/>              
            </Button>
            <Button>
              <Icon name="md-settings" style={styles.FooterIcon}/>              
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
      );
    }
}

const styles = {
  TabStyle: {
    backgroundColor: Colors.primary,
  },
  TabTextStyle: {
    color: '#E5E5E5',
    fontSize: 14,
  },
  ActiveTabTextStyle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  FooterIcon: {
    color: '#555'
  },
  FooterIconActive: {
    color: Colors.primary
  },
  FooterText: {
    color: '#000'
  }
}

export default HomeScreen;
