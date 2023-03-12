import React from 'react';
import {View, Text} from 'react-native';

import * as Yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {DynamicTextInput} from 'src/components';

type SubscribeFormData = {
  email: string;
};
const Subscribe = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<SubscribeFormData>({resolver});

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <DynamicTextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
    </View>
  );
};

export default Subscribe;

const resolver = yupResolver(
  Yup.object({
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Email is required'),
  }),
);
