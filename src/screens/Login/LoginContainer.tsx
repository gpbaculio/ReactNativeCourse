import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {DynamicView, LittleLemonFooter} from 'src/components';

type LoginContainerProps = {children: ReactNode};

const LoginContainer = ({children}: LoginContainerProps) => (
  <DynamicView backgroundColor="#333333" flex={1}>
    <ScrollView
      indicatorStyle="white"
      contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
    <LittleLemonFooter />
  </DynamicView>
);

export default LoginContainer;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});
