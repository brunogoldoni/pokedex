import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'pokedex',
      storage: AsyncStorage,
      whitelist: ['user'],
    },
    reducers,
  );

  return persistedReducer;
};
