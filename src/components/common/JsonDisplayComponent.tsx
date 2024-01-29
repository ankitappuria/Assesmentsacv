import React from 'react';
import CarModelState, { ICarModel } from "../../reducers/car-model-type";
import  "./jsonDisplay.css";

type Props = {
    inputJson:any
};


const JsonDisplayComponent: React.FC<Props> = ({ inputJson }) => {
    return (
    <div className="json-container">
       <pre> {JSON.stringify(inputJson,null,2)}</pre>
    </div>
    );
};

export  default JsonDisplayComponent;
