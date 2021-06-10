import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counter from "./reducers/counter";

const store = configureStore({
  reducer: { counter },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
