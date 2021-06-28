/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AlertProvider} from './src/context/AlertContext';

import Routes from './src/routes';

import {Container} from './src/styles/global';

const App = () => {
  return (
    <Container>
      <AlertProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Routes />
        </NavigationContainer>
      </AlertProvider>
    </Container>
  );
};

export default App;
