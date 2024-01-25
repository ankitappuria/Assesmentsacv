import React from 'react';
import CarModelState, { ICarModel } from "../../../reducers/car-type";
import { useSelector, shallowEqual } from "react-redux";
import useFilter from './hook';
import { RootState } from "../../../store/store";
import JsonDisplay from "../common/jsonDisplay";

interface ICarFilter {
    location?: string;
    model?: string;
    noOfOwners?: string;
    transmission?: string;
}

function CarFilter() {
    const { carModels }: CarModelState = useSelector(
        (state: RootState) => state.carModel,
        shallowEqual
    );
    const [carFilter, setCarFilter] = React.useState<ICarFilter | {}>({});
    const [filteredData]:ICarModel[]  = useFilter(carFilter, carModels)
        console.log(typeof filteredData);

    const onCarFilterSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCarFilter({
            ...carFilter,
            [event.currentTarget.id]: event.currentTarget.value
        });
    };

    const onCheckBoxchanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event.currentTarget.value", event.currentTarget.value);
    }

    const onCarFilterInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCarFilter({
            ...carFilter,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    const location = new Set(carModels.map(function (carModelObj: any) { return carModelObj.location; }));
    const locationArray = Array.from(location);

    return (
        <div className="sub-container">
            <h1>Filters</h1>
            <div className="filter">
                <h3>Location</h3>
                <select name="location" id="location" onChange={onCarFilterSelectChange}>
                    {locationArray.map((location: string, index: number) => {
                        return (<option key={index} value={location}>
                            {location}
                        </option>)
                    })
                    }
                </select>
                <div>

                    <h3>Brand</h3>
                    {carModels.map((carModelObj: any) => {
                        return (<div><label>
                            <input type="checkbox" onChange={onCheckBoxchanged} value={carModelObj.model} name="model" />{carModelObj.model}</label></div>
                        )
                    })
                    }
                </div>
                <div>
                    <h3>Owners</h3>
                    <div>
                        <input type="radio" id="1st" name="noOfOwners" value="1" onChange={onCarFilterInputChange} />
                        <label htmlFor="1st">1st Owner</label>
                    </div>
                    <div>
                        <input type="radio" id="2nd" name="noOfOwners" value="2" onChange={onCarFilterInputChange} />
                        <label htmlFor="2nd">2nd Owner</label>
                    </div>
                    <div>
                        <input type="radio" id="3rd" name="noOfOwners" value="3" onChange={onCarFilterInputChange} />
                        <label htmlFor="3rd">3rd Owner</label>
                    </div>
                </div>

            </div>
            {/* <JsonDisplay inputJson={filteredData}></JsonDisplay> */}
        </div>
    );
}

export default CarFilter;
