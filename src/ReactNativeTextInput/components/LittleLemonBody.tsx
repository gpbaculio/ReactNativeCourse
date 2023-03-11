import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DynamicText, DynamicTextInput, DynamicView} from 'src/components';
import DynamiPressable from 'src/components/DynamicPressable';

const LittleLemonBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogInPress = () => {
    setIsLoggedIn(true);
  };

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
      {isLoggedIn ? (
        <DynamicView>
          <DynamicText
            textAlign="center"
            fontSize={30}
            color="#FFFFFF"
            marginVertical="xL">
            You are logged in
          </DynamicText>
        </DynamicView>
      ) : (
        <DynamicView>
          <DynamicText
            fontSize={18}
            marginVertical="xs"
            textAlign="center"
            color="#EDEFEE">
            Login to continue
          </DynamicText>
          <DynamicTextInput
            borderRadius={3}
            backgroundColor="#FFFFFF"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            padding="xs"
            mt="s"
            placeholder="Email"
          />
          <DynamicTextInput
            borderRadius={3}
            backgroundColor="#FFFFFF"
            value={password}
            onChangeText={setPassword}
            padding="xs"
            mt="s"
            secureTextEntry
            placeholder="Password"
          />
          <DynamiPressable
            paddingVertical="s"
            backgroundColor="#EE9972"
            alignSelf="center"
            mt="m"
            alignItems="center"
            borderRadius={24}
            width={'50%'}
            onPress={onLogInPress}>
            <DynamicText fontWeight="600" fontSize={21}>
              Log in
            </DynamicText>
          </DynamiPressable>
        </DynamicView>
      )}
    </ScrollView>
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});
