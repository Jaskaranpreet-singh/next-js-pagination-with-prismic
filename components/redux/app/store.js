import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore ,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';

import reduxLogger from 'redux-logger'
// const logger=reduxLogger.createLogger();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,counterReducer)



export const store = configureStore({
  reducer: {
    counter:  persistedReducer,   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(reduxLogger),
})


export const persistor = persistStore(store)