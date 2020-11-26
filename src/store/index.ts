import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { fromPost, fromUser } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export { store, fromPost, fromUser };
