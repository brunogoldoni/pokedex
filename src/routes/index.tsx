import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Introduction from '../screens/Introduction';
import PokemonInfos from '../screens/PokemonInfos';

const Routes = () => {
  const Stack = createStackNavigator();

  const {isLogged} = useSelector(state => state.user);

  return (
    <>
      {
        isLogged ? 
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PokemonInfos" component={PokemonInfos} />
          </Stack.Navigator>
        :
          <Stack.Navigator
            initialRouteName="Introduction"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Introduction" component={Introduction} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      }
    </>
  );
};

export default Routes;
