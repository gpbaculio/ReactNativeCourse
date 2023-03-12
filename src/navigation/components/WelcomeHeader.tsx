import {View, Text} from 'react-native';
import React from 'react';
import {DynamicText, DynamicView} from 'src/components';

const WelcomeHeader = () => {
  return (
    <DynamicView variant="header" alignItems="center">
      <DynamicText pt="s" variant="header">
        Welcome
      </DynamicText>
    </DynamicView>
  );
};

export default WelcomeHeader;
