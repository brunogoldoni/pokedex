/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle="light-content" />

      <View>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Pokemon App</Text>
      </View>

      <View style={{marginTop: 8}}>
        <Text style={{fontSize: 18}}>React Native</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
