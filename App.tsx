import React from 'react';
import {View} from 'react-native';

import {AppContainer} from 'src/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <AppContainer>
      <MaterialCommunityIcons name="account-arrow-up" size={30} color="#900" />
    </AppContainer>
  );
};

export default App;
