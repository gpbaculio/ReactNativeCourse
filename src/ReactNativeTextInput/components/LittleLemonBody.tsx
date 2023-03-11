import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DynamicText, DynamicTextInput} from 'src/components';

const LittleLemonBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    </ScrollView>
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});
