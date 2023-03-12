import {ScrollView, StyleSheet} from 'react-native';

import {
  DynamicFastImage,
  DynamicPressable,
  DynamicText,
  DynamicView,
} from 'src/components';
import {logo} from 'src/assets';
import {useDefaultNavigation} from 'src/navigation/hooks';

export default function WelcomeScreen() {
  const navigation = useDefaultNavigation();

  const onGoBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <DynamicView
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        m={10}>
        <DynamicFastImage
          width={100}
          height={100}
          borderRadius={20}
          source={logo}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <DynamicText
          fontSize={30}
          color="#EDEFEE"
          textAlign="center"
          paddingRight="xs"
          paddingLeft="l"
          paddingTop="xxL"
          paddingBottom="s">
          Little Lemon
        </DynamicText>
      </DynamicView>
      <DynamicText
        padding="l"
        marginVertical="xs"
        fontSize={24}
        color="#EDEFEE"
        textAlign="center">
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </DynamicText>
      <DynamicPressable
        alignSelf="center"
        backgroundColor="#EE9972"
        paddingHorizontal="xL"
        paddingVertical="m"
        borderRadius={8}
        onPress={onGoBackPress}>
        <DynamicText fontWeight="600">Go back</DynamicText>
      </DynamicPressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
