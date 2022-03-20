import React from 'react';

import {EmptyContainer, EmptyLabel} from './styles';

interface IEmptyComponent {
  message: string,
}

const EmptyComponent = ({message}: IEmptyComponent) => {
  return (
    <EmptyContainer>
      <EmptyLabel>{message}</EmptyLabel>
    </EmptyContainer>
  );
};

export default EmptyComponent;
