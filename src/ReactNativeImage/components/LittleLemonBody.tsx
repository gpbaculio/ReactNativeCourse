import React from 'react';
import {ScrollView, StyleSheet, useColorScheme} from 'react-native';

import {DynamicFastImage, DynamicText, DynamicView} from 'src/components';

const lemon = require('src/assets/lemon.png');

const LittleLemonBody = () => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light' ? '#333333' : '#FFFFFF';

  return (
    <ScrollView
      indicatorStyle="white"
      contentContainerStyle={styles.contentContainer}>
      <DynamicView
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        marginVertical="l">
        <DynamicFastImage
          source={lemon}
          width={100}
          height={100}
          resizeMode="cover"
          borderRadius={16}
          mr="l"
        />
        <DynamicText fontSize={24} color={color}>
          Little Lemon
        </DynamicText>
      </DynamicView>
      <DynamicText textAlign="center" fontSize={21} color={color}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </DynamicText>
    </ScrollView>
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});
