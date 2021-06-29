import Reactotron from 'reactotron-react-native';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {middleware as thunkMiddleware} from 'redux-saga-thunk';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

let sagaMiddleware;
if (__DEV__) {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({sagaMonitor});
} else {
  sagaMiddleware = createSagaMiddleware();
}

const middlewares = [thunkMiddleware, sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
