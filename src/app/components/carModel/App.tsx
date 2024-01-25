import React from 'react';
// import logo from '../assets/logo.svg';
import './App.css';
import CarModelForm from "./CarModelForm";
import CarModelState, { ICarModel } from "../../../reducers/car-type";
import { Dispatch } from "redux";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addCarModel
} from "../../../reducers/car-model-reducer";
import { Link } from "react-router-dom";
import JsonDisplay from "../common/jsonDisplay";

import { RootState } from "../../../store/store";

function App() {
  const { carModels }: CarModelState = useSelector(
    (state: RootState) => state.carModel,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const addNewCar = React.useCallback(
    (carModel: ICarModel) => dispatch(addCarModel(carModel)),
    [dispatch]
  );

  return (
    <div className="App">
      <h1>
        <div>
          <Link to="carFilter"> Car Filter </Link>
        </div>
      </h1>
      <div className="form-container">
        <CarModelForm saveCarModel={addNewCar}></CarModelForm>
      </div>
      <JsonDisplay inputJson={carModels}></JsonDisplay>

    </div>
  );
}

export default App;
