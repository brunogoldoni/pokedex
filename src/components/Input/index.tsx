import React from 'react';

import {Container} from './styles';

interface IInput {
  onChangeText(): void,
  placeholder: string,
  placeholderTextColor: string,
}

const Input = ({onChangeText, placeholder, placeholderTextColor, ...props}: IInput) => {
  return (
    <Container
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default Input;
