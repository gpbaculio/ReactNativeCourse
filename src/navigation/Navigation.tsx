import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Login, Welcome} from 'src/screens';
import {LittleLemonHeader} from 'src/components';
import {colors} from 'themeConfig';

export type BottomTabNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const commonOptions = {header: LittleLemonHeader};

const Navigation = () => (
  <BottomTab.Navigator
    initialRouteName="Login"
    screenOptions={{
      tabBarStyle: {
        backgroundColor: colors['#EE9972'],
      },
      tabBarActiveTintColor: colors['#000000'],
      tabBarInactiveTintColor: colors['#333333'],
    }}>
    <BottomTab.Screen
      name="Login"
      options={{
        ...commonOptions,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
      component={Login}
    />
    <BottomTab.Screen
      name="Welcome"
      options={{
        ...commonOptions,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      component={Welcome}
    />
  </BottomTab.Navigator>
);

export default Navigation;
