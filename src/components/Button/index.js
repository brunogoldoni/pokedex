import React from 'react';

import {Container, Label} from './styles';

const Button = ({onPress, disabled, label}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
