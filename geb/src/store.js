import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit"

import LoginSlice from './slices/loginSlice';

const store = configureStore({
  reducer: combineReducers({
    login: LoginSlice

  }),
  middleware: getDefaultMiddleware(),
  devTools: true

})

export default store;