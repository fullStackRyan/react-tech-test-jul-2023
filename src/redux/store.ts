import { configureStore } from "@reduxjs/toolkit";
import rankingsReducer from "./rankings/rankingSlice";

const rootReducer = {
  rankings: rankingsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { rootReducer };
export default store;
