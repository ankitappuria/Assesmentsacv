import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import carModelReducer from "../reducers/car-model-reducer";

const store = configureStore({
  reducer: {
    // You are free to call the LHS what you like, but it must have a reducer on the RHS.
    carModel: carModelReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;