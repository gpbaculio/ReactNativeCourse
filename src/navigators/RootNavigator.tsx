import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Subscribe, Welcome} from 'src/screens';
import {SubscribeHeader, WelcomeHeader} from './components';

export type NativeStackNavigatorParamList = {
  Welcome: undefined;
  Subscribe: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackNavigatorParamList>();

const Navigation = () => (
  <NativeStack.Navigator initialRouteName="Welcome">
    <NativeStack.Screen
      name="Welcome"
      options={{header: WelcomeHeader}}
      component={Welcome}
    />
    <NativeStack.Screen
      name="Subscribe"
      options={{header: SubscribeHeader}}
      component={Subscribe}
    />
  </NativeStack.Navigator>
);

export default Navigation;
