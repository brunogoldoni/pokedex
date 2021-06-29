/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import './src/config/ReactotronConfig';
import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AlertProvider} from './src/context/AlertContext';

import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from './src/routes';

import {Container} from './src/styles/global';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <AlertProvider>
            <NavigationContainer>
              <StatusBar barStyle="light-content" backgroundColor="#000" />
              <Routes />
            </NavigationContainer>
          </AlertProvider>
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default App;
