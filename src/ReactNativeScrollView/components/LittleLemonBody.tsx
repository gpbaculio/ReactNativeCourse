import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DynamicText, DynamicView} from 'src/components';

const LittleLemonBody = () => {
  return (
    <ScrollView
      indicatorStyle="white"
      contentContainerStyle={styles.contentContainer}>
      <DynamicText
        textAlign="center"
        fontSize={30}
        color="#FFFFFF"
        marginVertical="xL">
        Welcome to Little Lemon
      </DynamicText>
      <DynamicText
        fontSize={38}
        padding="l"
        marginVertical="xs"
        textAlign="center"
        color="#EDEFEE">
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </DynamicText>
    </ScrollView>
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});
