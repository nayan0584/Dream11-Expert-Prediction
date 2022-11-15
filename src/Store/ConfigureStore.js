import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Adslice from '../Slices/Adslice';
import Detailslice from '../Slices/Detailslice';

const persistConfig = {
  key: 'root',
  whitelist: ['Ads'],
  storage: AsyncStorage,
};

const reducer = combineReducers({
  Ads: Adslice,
  Detail: Detailslice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export {store, persistor};
