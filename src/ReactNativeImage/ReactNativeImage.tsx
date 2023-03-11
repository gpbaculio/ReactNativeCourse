import React from 'react';
import {useColorScheme} from 'react-native';

import {DynamicView} from 'src/components';
import {
  LittleLemonHeader,
  LittleLemonFooter,
  LittleLemonBody,
} from './components';

const ReactNativeImage = () => {
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === 'light' ? '#FFFFFF' : '#333333';

  return (
    <DynamicView backgroundColor={backgroundColor} flex={1}>
      <LittleLemonHeader />
      <LittleLemonBody />
      <LittleLemonFooter />
    </DynamicView>
  );
};

export default ReactNativeImage;
