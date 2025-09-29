import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
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
//redux-persist 임포트
import storage from 'redux-persist/lib/storage';

//Persist 설정 정의 - user slice만 저장하도록 설정
const persistConfig = {
  key: 'root', 
  storage,
  whitelist: ['user'],
};

//userReducer를 persistConfig로 래핑
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  // 래핑된 리듀서 사용
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);