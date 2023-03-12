import {ScrollView, StyleSheet} from 'react-native';

import {DynamicFastImage, DynamicText, DynamicView} from 'src/components';
import {logo} from 'src/assets';

export default function WelcomeScreen() {
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
