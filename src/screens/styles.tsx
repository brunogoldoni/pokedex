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

export const Container = ({children}: any) => (
  <WrapperContainer>
    <SafeArea>{children}</SafeArea>
  </WrapperContainer>
);

export const Content = styled.View`
  flex: 1;
`;

export const WrapperInput = styled.KeyboardAvoidingView`
  margin-bottom: 16px;
`;

export const Header = styled.View`
  margin: 24px 0;
`;

export const GOBackButtonContainer = styled.TouchableOpacity`
  width: 100px;
`;

export const GOBackButtonContent = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: ${colors.mediumDark};
  border-radius: 10px;
  padding: 8px;
`;

export const GOBackText = styled.Text`
  align-items: center;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  align-self: center;
`;

export const UserName = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
`;

export const Footer = styled.View`
  justify-content: flex-end;
  padding: 24px;
  flex: 1;
`;
