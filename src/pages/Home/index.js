import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <View>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Pokemon App</Text>
      </View>

      <View style={{marginTop: 8}}>
        <Text style={{fontSize: 18}}>React Native</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
