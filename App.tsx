import React from 'react';
import {StatusBar} from 'react-native';

import {AppContainer} from 'src/components';
import {RootNavigator} from 'src/navigators';

const App = () => {
  return (
    <AppContainer>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </AppContainer>
  );
};

export default App;
