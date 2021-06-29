import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import PokemonInfos from '../screens/PokemonInfos';
import Introduction from '../screens/Introduction';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Introduction"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="PokemonInfos" component={PokemonInfos} />
    </Stack.Navigator>
  );
};

export default Routes;
