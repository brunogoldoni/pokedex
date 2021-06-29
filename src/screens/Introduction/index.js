import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {setUser} from '../../store/modules/user/actions';

import {Input, Button} from '../../components';

import {colors} from '../../styles/colors';

import {Container} from '../styles';
import {Content, IMGIntroduction, Footer, WrapperInput} from './styles';

const Introduction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [nickName, setNickName] = useState('');

  const handleSetUser = text => {
    dispatch(setUser(nickName));

    navigation.navigate('Home');
  };

  return (
    <Container>
      <Content>
        <IMGIntroduction source={require('../../assets/newtwo.png')} />
      </Content>

      <Footer>
        <WrapperInput>
          <Input
            placeholder="Digite seu nick name"
            onChangeText={text => setNickName(text)}
            placeholderTextColor={`${colors.phTextColor}`}
          />
        </WrapperInput>

        <Button onPress={() => handleSetUser()} label="Entrar" />
      </Footer>
    </Container>
  );
};

export default Introduction;
