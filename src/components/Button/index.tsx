import React from 'react';

import {Container, Label} from './styles';

interface IButton {
  onPress(): void;
  label: string;
}

const Button = ({onPress, label, ...props}: IButton) => {
  return (
    <Container onPress={onPress} {...props}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
