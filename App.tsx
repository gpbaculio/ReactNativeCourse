import React from 'react';
import {StatusBar} from 'react-native';

import {AppContainer} from 'src/components';
import Navigation from 'src/navigators';

const App = () => {
  return (
    <AppContainer>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </AppContainer>
  );
};

export default App;
