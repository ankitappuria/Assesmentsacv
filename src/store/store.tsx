import { configureStore } from "@reduxjs/toolkit";
import carModelReducer from "../reducers/car-model-reducer";

const store = configureStore({
  reducer: {
    carModel: carModelReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;