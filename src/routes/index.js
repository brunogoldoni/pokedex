import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import PokemonInfos from '../screens/PokemonInfos';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokemonInfos" component={PokemonInfos} />
    </Stack.Navigator>
  );
};

export default Routes;
