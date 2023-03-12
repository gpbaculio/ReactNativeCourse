import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, Welcome} from 'src/screens';
import {LittleLemonHeader} from 'src/components';

export type StackNavigatorParamList = {Welcome: undefined; Login: undefined};

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const options = {header: LittleLemonHeader};

const Navigation = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Welcome" options={options} component={Welcome} />
    <Stack.Screen name="Login" options={options} component={Login} />
  </Stack.Navigator>
);

export default Navigation;
