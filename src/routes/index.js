import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Introduction from '../screens/Introduction';
import PokemonInfos from '../screens/PokemonInfos';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Introduction"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="PokemonInfos" component={PokemonInfos} />
    </Stack.Navigator>
  );
};

export default Routes;
