import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import createImmutable from 'redux-persist-seamless-immutable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistenceTransform = createImmutable();

const reducer = (state = {}, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [persistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
