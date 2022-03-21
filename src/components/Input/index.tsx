import React from 'react';

import {Container} from './styles';

interface IInput {
  placeholder: string;
  autoCorrect?: boolean;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean;
  placeholderTextColor: string;
  onChangeText: (value: string) => void;
}

const Input = ({
  placeholder,
  autoCorrect,
  autoCapitalize,
  secureTextEntry,
  placeholderTextColor,
  onChangeText,
  ...props
}: IInput) => {
  return (
    <Container
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default Input;
