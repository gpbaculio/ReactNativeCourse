import {Text} from 'react-native';
import React from 'react';
import {DynamicView} from 'src/components';
import {LittleLemonHeader, LittleLemonFooter} from './components';

const ReactNativeScreen = () => {
  return (
    <DynamicView backgroundColor="#495E57" flex={1}>
      <LittleLemonHeader />
      <LittleLemonFooter />
    </DynamicView>
  );
};

export default ReactNativeScreen;
