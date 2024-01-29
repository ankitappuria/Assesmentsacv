import CarModelState, { CarModelAction, ICarModel } from "./car-model-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CarModelState = {
  carModels: [
    {
      model: "Swift Dezire",
      color: "red",
      yearManufacture: 2022,
      insuranceValid: "2026",
      kms: 2000,
      location: "Chennai",
      noOfOwners: 1,
      transmission: "NA",
      externalfitment: "NA",
      photo: "ford.jpeg"
    }
  ]
};

export const carModelSlice = createSlice({
  name: CarModelAction,
  initialState: initialState,
  reducers: {
    addCarModel: (state,
      action: PayloadAction<ICarModel>) => {
      const newCarModel: ICarModel = {
        model: action.payload.model,
        color: action.payload.color,
        yearManufacture: action.payload.yearManufacture,
        insuranceValid: action.payload.insuranceValid,
        kms: action.payload.kms,
        location: action.payload.location,
        noOfOwners: action.payload.noOfOwners,
        transmission: action.payload.transmission,
        externalfitment: action.payload.externalfitment,
        photo: "ford.jpeg"
      };
      state.carModels = state.carModels.concat(newCarModel);
    }
  },


});

export const { addCarModel } =
  carModelSlice.actions;

export default carModelSlice.reducer;