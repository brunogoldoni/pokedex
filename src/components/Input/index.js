import React from 'react';

import {Container} from './styles';

const Input = ({onChangeText, placeholder, placeholderTextColor}) => {
  return (
    <Container
      type="text"
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default Input;
