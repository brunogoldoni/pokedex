import React from 'react';

import {Container, Label} from './styles';

interface IButton {
  label: string;
  onPress(): void;
  isActive?: boolean;
}

const Button = ({onPress, label, isActive, ...props}: IButton) => {
  return (
    <Container
      onPress={onPress}
      disabled={isActive}
      {...props}
    >
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
