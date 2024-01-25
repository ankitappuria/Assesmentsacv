import * as React from "react";
import { ICarModel } from "../../../reducers/car-type";

type Props = {
    saveCarModel: (carModel: ICarModel | any) => void;
};


/** model: string
    color: string
    yearManufacture: number;
    insuranceValid:string;
    kms:number;
    location:string;
    noOfOwners:string;
    transmission:string;
    externalfitment:string;
    photo:string; */
const CarModelForm: React.FC<Props> = ({ saveCarModel }) => {
    const [carModel, setCarModel] = React.useState<ICarModel | {}>();

    const onCarInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCarModel({
            ...carModel,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewCar = (e: React.FormEvent) => {
        e.preventDefault();
        saveCarModel({ ...carModel, photo: 'abc.jpg' });
    };

    return (
        <form onSubmit={addNewCar} className="flex-row">
            <input
                type="text"
                id="model"
                placeholder="model"
                onChange={onCarInputChange}
            />
            <input
                type="text"
                id="color"
                placeholder="color"
                onChange={onCarInputChange}
            />
            <input

                type="number"
                id="yearManufacture"
                placeholder="yearManufacture"
                onChange={onCarInputChange}
            />
            <input
                type="text"
                id="insuranceValid"
                placeholder="insuranceValid"
                onChange={onCarInputChange}
            />
            <input
                type="text"
                id="kms"
                placeholder="kms"
                onChange={onCarInputChange}
            />
            <input
                type="text"
                id="location"
                placeholder="location"
                onChange={onCarInputChange}
            />
            <input
                type="number"
                id="noOfOwners"
                placeholder="noOfOwners"
                onChange={onCarInputChange}
            />
            <input
                type="text"
                id="transmission"
                placeholder="transmission"
                onChange={onCarInputChange}
            />
            <input type="text"
                id="externalfitment"
                placeholder="externalfitment"
                onChange={onCarInputChange} />

            <input type="file"></input>
            <button disabled={carModel === undefined ? true : false}>
                Submit
            </button>
        </form>
    );

};

export default CarModelForm;