import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Input, Button} from '../../components';

import {colors} from '../../styles/colors';

import {Container, WrapperInput, Footer} from '../styles';
import {Content, IMGSignIn} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Content>
        <IMGSignIn source={require('../../assets/poke.png')} />
      </Content>

      <Footer>
        <WrapperInput>
          <Input
            // returnKeyType='Next'
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            onChangeText={text => setEmail(text)}
            placeholderTextColor={`${colors.phTextColor}`}
          />

          <Input
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            // returnKeyType='Send'
            placeholder="Digite sua senha"
            onChangeText={text => setPassword(text)}
            placeholderTextColor={`${colors.phTextColor}`}
          />
        </WrapperInput>

        <Button disabled={!email && !password} label="Entrar" onPress={() => handleSignIn()} />
      </Footer>
    </Container>
  );
};

export default SignIn;
