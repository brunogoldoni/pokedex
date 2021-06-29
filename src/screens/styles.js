import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

import {colors} from '../styles/colors';

const SafeArea = styled(SafeAreaView).attrs({
  forceInset: {bottom: 'never'},
})`
  background-color: ${colors.dark};
  flex: 1;
`;

const WrapperContainer = styled.View`
  background-color: ${colors.dark};
  padding: 16px;
  flex: 1;
`;

export const Container = ({children}) => (
  <WrapperContainer>
    <SafeArea>{children}</SafeArea>
  </WrapperContainer>
);
