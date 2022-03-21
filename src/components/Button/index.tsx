import React from 'react';

import {Container, Label} from './styles';

interface IButton {
  label: string;
  onPress(): void;
  disabled?: boolean;
}

const Button = ({onPress, label, disabled, ...props}: IButton) => {
  return (
    <Container
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
