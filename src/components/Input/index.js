import React from 'react';

import {Container} from './styles';

const Input = ({onChangeText, placeholder, placeholderTextColor, ...props}) => {
  return (
    <Container
      type="text"
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default Input;
