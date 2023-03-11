import React from 'react';
import {DynamicText, DynamicView} from 'src/components';

const LittleLemonBody = () => {
  return (
    <DynamicView flex={1} paddingHorizontal={40}>
      <DynamicText
        textAlign="center"
        fontSize={30}
        color="#FFFFFF"
        marginVertical="xL">
        Welcome to Little Lemon
      </DynamicText>
      <DynamicText fontSize={24} textAlign="center" color="#FFFFFF">
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </DynamicText>
    </DynamicView>
  );
};

export default LittleLemonBody;
