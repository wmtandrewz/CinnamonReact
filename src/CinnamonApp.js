import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/Home';
import Profile from './components/Profile';
import Details from './components/Details';

import { createAppContainer, createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';

const NaviStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      headerStyle: { display: "none" }
    }
  },
  Details
})

const CustomDrawerComp = (props) => (
  <View>
    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        size="large"
        rounded
        title="TA"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
    </View>
    <View>
      <DrawerItems {...props} />
    </View>
  </View>
)

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: NaviStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (<Icon name="home" size={24} style={{ color: tintColor }} />),
      }
    },
    Profile:Profile
    
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComp,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  })

class CinnamonApp extends React.Component {

  render() {
    this.props.hideNavBar;
    return (
      <RootStack />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(RootStack)
