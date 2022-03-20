import React from 'react';

import {Container, Label} from './styles';

const Button = ({onPress, label, ...props}) => {
  return (
    <Container onPress={onPress} {...props}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
