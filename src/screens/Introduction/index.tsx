import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {setUser} from '../../store/modules/user/actions';

import {Input, Button} from '../../components';

import {colors} from '../../styles/colors';

import {Container, Footer, WrapperInput} from '../styles';
import {Content, IMGIntroduction} from './styles';
import { StringableActionCreator } from '@redux-saga/types';

const Introduction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [nickName, setNickName] = useState('');

  const handleSetUser = (text: string) => {
    dispatch(setUser(nickName));

    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Content>
        <IMGIntroduction source={require('../../assets/newtwo.png')} />
      </Content>

      <Footer>
        <WrapperInput>
          <Input
            // returnKeyType='Send'
            placeholder="Digite seu apelido"
            onChangeText={(text: string) => setNickName(text)}
            placeholderTextColor={`${colors.phTextColor}`}
          />
        </WrapperInput>

        <Button
          label="Avançar"
          disabled={!nickName}
          onPress={(text: string) => handleSetUser(text)}
        />
      </Footer>
    </Container>
  );
};

export default Introduction;
