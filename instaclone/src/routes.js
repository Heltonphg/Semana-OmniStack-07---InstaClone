import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './pages/Login';
import Feed from './pages/Feed';
import New from './pages/New';
import Search from './pages/Search';
import Perfil from './pages/Perfil';
import Notification from './pages/Notification';
import Chat from './pages/Chat';



//! STACK
const PageStack = createStackNavigator(
    {
      Feed: {
          screen: Feed
      },
      Chat:{
          screen: Chat
      },
    },
  
    {
      initialRouteName: 'Feed',
  
      defaultNavigationOptions: {
        header: null,
        headerMode: 'none'
      },
      mode: 'card',
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
        };
      }
  
    }
  );
  

const TabsPage = createBottomTabNavigator({
    Feed: {
        screen: PageStack
    },
    Search,
    New,
    Notification,
    Perfil,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state
            let iconName;

            if (routeName === 'Feed') {
                iconName = 'home'
            } else if (routeName === 'Search') {
                iconName = `search`;
            } else if (routeName === 'New') {
                focused ? iconName = `add-circle` : iconName = `add-circle-outline`;
            }
            else if (routeName === 'Notification') {
                focused ? iconName = `favorite` : iconName = 'favorite-border';
            } else if (routeName === 'Perfil') {
                focused ? iconName = `person` : iconName = `person-outline`;;
            }

            return <Icon name={iconName} size={30} color={focused ? tintColor : '#888'} />
        }
    }),
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#000'
    },
})



const Routes = createAppContainer(
    createSwitchNavigator({
        Login: {
            screen: Login
        },
        Home: {
            screen: TabsPage
        },
         New: {
            screen: New
        }
    },
        {
            initialRouteName: 'New',
        }),
);


export default Routes;