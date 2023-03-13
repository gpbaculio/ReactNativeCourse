import React from 'react';
import {Dimensions} from 'react-native';

import {
  DynamicFastImage,
  DynamicPressable,
  DynamicText,
  DynamicView,
} from 'src/components';

import {littleLemonLogo} from 'src/assets';

import {useDefaultNavigation} from 'src/navigation/hooks';

const {width, height} = Dimensions.get('window');

const Welcome = () => {
  const navigation = useDefaultNavigation();

  const onNewsLetterPress = () => {
    navigation.navigate('Subscribe');
  };

  return (
    <DynamicView variant="container">
      <DynamicView flex={1} alignItems="center" justifyContent="center">
        <DynamicFastImage
          source={littleLemonLogo}
          width={width * 0.4}
          height={height * 0.4}
          resizeMode="contain"
        />
        <DynamicText mt="xL" fontSize={21} fontWeight="500" textAlign="center">
          Little Lemon, your local Mediterranean Bistro
        </DynamicText>
      </DynamicView>
      <DynamicPressable
        onPress={onNewsLetterPress}
        variant="buttonPrimary"
        mb="xxL"
        mt="auto">
        <DynamicText variant="buttonText">Newsletter</DynamicText>
      </DynamicPressable>
    </DynamicView>
  );
};

export default Welcome;
