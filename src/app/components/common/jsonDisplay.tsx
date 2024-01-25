import React from 'react';
import CarModelState, { ICarModel } from "../../../reducers/car-type";

type Props = {
    inputJson:Array<any>
};


const JsonDisplay: React.FC<Props> = ({ inputJson }) => {
    return (
    <div className="json-container">
        {JSON.stringify(inputJson,null,2)}
    </div>
    );
};

export  default JsonDisplay;
