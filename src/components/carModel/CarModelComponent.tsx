import React,{useState} from 'react';
import './CarModelComponent.css';
import CarModelForm from "./CarModelForm";
import CarModelState, { ICarModel } from "../../reducers/car-model-type";
import { Dispatch } from "redux";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addCarModel
} from "../../reducers/car-model-reducer";
import { Link } from "react-router-dom";
import JsonDisplayComponent from "../common/JsonDisplayComponent";
import CarLogoList from "./CarLogoList";
import { RootState } from "../../store/store";

function CarModelComponent(){
  const { carModels }: CarModelState = useSelector(
    (state: RootState) => state.carModel,
    shallowEqual
  );
  const [carModelstr,setCarmodelStr] = useState<string>("");

  const dispatch: Dispatch<any> = useDispatch();

  const addNewCar = React.useCallback(
    (carModel: ICarModel) => dispatch(addCarModel(carModel)),
    [dispatch]
  );

  const onLogoClick = (carModelStr:string) =>{
    setCarmodelStr(carModelStr);
  };

  return (
    <div className="sub-container">
      <div>
        <Link to="carFilter"> Car Filter </Link>
      </div>
      <div>
        <CarLogoList carLogoClicked={onLogoClick} />
      </div>
      {carModelstr &&<div className="form-container">
        <CarModelForm saveCarModel={addNewCar} carModelstr={carModelstr}></CarModelForm>
      </div>}
      <JsonDisplayComponent inputJson={carModels}></JsonDisplayComponent>

    </div>
  );
}

export default CarModelComponent;
