import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, tokenReducer } from './reducers/reducers';
import { combineReducers } from 'redux';

import { reducerPath, reducer, middleware } from './API/api';
import { authorizationApi } from './API/api';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [authorizationApi.reducerPath, 'filter', reducerPath],
};

const reducers = combineReducers({
  filter: filterReducer,
  [reducerPath]: reducer,
  [authorizationApi.reducerPath]: authorizationApi.reducer,
  token: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([middleware, authorizationApi.middleware]),
});

export const persistor = persistStore(store);
