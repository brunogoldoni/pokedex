import React from 'react';

import {EmptyContainer, EmptyLabel} from './styles';

const EmptyComponent = ({message}) => {
  return (
    <EmptyContainer>
      <EmptyLabel>{message}</EmptyLabel>
    </EmptyContainer>
  );
};

export default EmptyComponent;
