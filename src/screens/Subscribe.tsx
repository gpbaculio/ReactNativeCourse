import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import * as Yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {
  DynamicFastImage,
  DynamicPressable,
  DynamicText,
  DynamicTextInput,
  DynamicView,
} from 'src/components';

import {littleLemonLogoGrey} from 'src/assets';
import {validateEmail} from 'src/utils';

const {width, height} = Dimensions.get('window');
const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

type SubscribeFormData = {email: string};

const Subscribe = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm<SubscribeFormData>({resolver, mode: 'onChange'});

  const {email} = getValues();

  const onSubmit = (data: SubscribeFormData) => {};

  const isDisabled = !!errors?.email?.message;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={60}
      behavior={behavior}
      style={styles.container}>
      <DynamicView
        variant="container"
        alignItems="center"
        justifyContent="center">
        <DynamicFastImage
          source={littleLemonLogoGrey}
          width={width * 0.3}
          height={height * 0.2}
          resizeMode="contain"
        />
        <DynamicText pt="m" pb="xL">
          Subcribe to our newsletter for our latest delicious recipes!
        </DynamicText>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => {
            const color = errors.email ? 'red' : '#333333';

            return (
              <DynamicTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                borderColor={color}
                borderWidth={1}
                width="100%"
                borderRadius={8}
                placeholder="sample@email.com"
                padding="xs"
                keyboardType="email-address"
                color={color}
              />
            );
          }}
          name="email"
        />
        {errors.email ? (
          <DynamicView width="100%" mt="xxs">
            <DynamicText color="red" textAlign="left" fontWeight="500">
              {errors.email.message}
            </DynamicText>
          </DynamicView>
        ) : null}
        <DynamicPressable
          variant="buttonPrimary"
          width="100%"
          mt="xL"
          disabled={isDisabled}
          opacity={isDisabled ? 0.5 : 1}
          onPress={handleSubmit(onSubmit)}>
          <DynamicText variant="buttonText">Subscribe</DynamicText>
        </DynamicPressable>
      </DynamicView>
    </KeyboardAvoidingView>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const emailErrorMessage = 'Invalid Email Address';
const resolver = yupResolver(
  Yup.object({
    email: Yup.string()
      .email(emailErrorMessage)
      .test(
        'isValidEmail',
        emailErrorMessage,
        value => !!(value && validateEmail(value)),
      )
      .required('Email is required'),
  }),
);
