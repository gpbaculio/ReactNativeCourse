import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DynamicFastImage, DynamicText, DynamicView} from 'src/components';
const lemon = require('src/assets/lemon.png');

const LittleLemonBody = () => {
  return (
    <ScrollView
      indicatorStyle="white"
      contentContainerStyle={styles.contentContainer}>
      <DynamicView
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mt="l">
        <DynamicFastImage
          source={lemon}
          width={100}
          height={100}
          resizeMode="cover"
          borderRadius={16}
          mr="l"
        />
        <DynamicText fontSize={21} color="#FFFFFF">
          Little Lemon
        </DynamicText>
      </DynamicView>
    </ScrollView>
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});
