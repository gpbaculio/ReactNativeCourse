import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import restyleTheme from 'restyleTheme';
import {NavigationContainer} from '@react-navigation/native';

type AppContainerProps = {children: React.ReactNode};

const AppContainer = ({children}: AppContainerProps) => (
  <NavigationContainer>
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={restyleTheme}>{children}</ThemeProvider>
    </GestureHandlerRootView>
  </NavigationContainer>
);

export default AppContainer;

const styles = StyleSheet.create({
  container: {flex: 1},
});
