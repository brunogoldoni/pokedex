import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

import { Input } from '../../components';
import { IInput } from '../../components/Input';

import { Error } from './styles';

type Props = IInput & {
  control: Control<any>;
  error?: FieldError;
  name: string;
};

const ControlledInput = ({ control, name, error, ...props }: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            {...props}
          />
        )}
      />

      {
        error && <Error>{error.message}</Error>
      }
  
    </>
  )
}

export default ControlledInput;