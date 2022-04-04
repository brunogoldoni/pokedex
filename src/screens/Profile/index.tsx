import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { BackIcon } from '../icons';

import {
  Container,
  Header,
  GOBackButtonContainer,
  GOBackButtonContent,
  GOBackText,
  UserName
} from '../styles';
import {
  Content,
  UserLabel,
  WrapperUserInfo
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

	const { userName, email } = useSelector((state) => state.user);

  return (
    <Container>
      <Header>
        <GOBackButtonContainer onPress={() => navigation.goBack()}>
          <GOBackButtonContent>
            <BackIcon />
            <GOBackText>voltar</GOBackText>
          </GOBackButtonContent>
        </GOBackButtonContainer>
      </Header>
      <Content>
        <WrapperUserInfo>
          <UserLabel>Nome:</UserLabel>
          <UserName>{userName}</UserName>
        </WrapperUserInfo>

        <WrapperUserInfo>
          <UserLabel>Email:</UserLabel>
          <UserName>{email}</UserName>
        </WrapperUserInfo>
      </Content>
    </Container>
  );
}

export default Profile;