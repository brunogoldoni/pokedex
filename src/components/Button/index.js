import React from 'react';

import {Container, Label} from './styles';

const Button = ({onPress, label}) => {
  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
