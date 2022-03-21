import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import { useAuth } from '../../hooks/auth'

import {Input, Button} from '../../components';

import {colors} from '../../styles/colors';

import {Container, WrapperInput, Footer} from '../styles';
import {Content, IMGSignIn} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signIn, isLogging } = useAuth();

  const handleSignIn = () => {
    signIn(email, password)
  };

  return (
    <Container>
      <Content>
        <IMGSignIn source={require('../../assets/poke.png')} />
      </Content>

      <Footer>
        <WrapperInput>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text: string) => setEmail(text)}
            placeholder="Digite seu e-mail"
            placeholderTextColor={`${colors.phTextColor}`}
          />

          <Input
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text: string) => setPassword(text)}
            placeholder="Digite sua senha"
            placeholderTextColor={`${colors.phTextColor}`}
          />
        </WrapperInput>

        <Button
          disabled={!email && !password}
          onPress={() => handleSignIn()}
          label="Entrar"
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
