import React, {useState} from 'react';

import {DynamicPressable, DynamicText, DynamicTextInput} from 'src/components';
import {useDefaultNavigation} from 'src/navigation/hooks';
import LoginContainer from './LoginContainer';

const Login = () => {
  const navigation = useDefaultNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    navigation.navigate('Welcome');
  };

  return (
    <LoginContainer>
      <DynamicText
        textAlign="center"
        fontSize={30}
        color="#FFFFFF"
        marginVertical="xL">
        Welcome to Little Lemon
      </DynamicText>
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
      <DynamicPressable
        mt="l"
        backgroundColor="#EE9972"
        alignSelf="center"
        paddingVertical="s"
        paddingHorizontal="xL"
        borderRadius={7}
        onPress={onLoginPress}>
        <DynamicText fontWeight="600">Log in</DynamicText>
      </DynamicPressable>
    </LoginContainer>
  );
};

export default Login;
