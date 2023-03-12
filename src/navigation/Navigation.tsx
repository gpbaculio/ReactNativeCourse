import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {LittleLemonHeader} from 'src/components';
import {Login, Welcome} from 'src/screens';

export type BottomTabNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
};

const BottomTab = createDrawerNavigator<BottomTabNavigatorParamList>();

const options = {header: LittleLemonHeader};

const Navigation = () => (
  <BottomTab.Navigator initialRouteName="Login">
    <BottomTab.Screen
      name="Login"
      options={{
        ...options,
        drawerIcon: ({color, size}) => (
          <MaterialCommunityIcons name="login" color={color} size={size} />
        ),
      }}
      component={Login}
    />
    <BottomTab.Screen
      name="Welcome"
      options={{
        ...options,
        drawerIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
      component={Welcome}
    />
  </BottomTab.Navigator>
);

export default Navigation;
