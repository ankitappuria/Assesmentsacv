import { useEffect, useState } from "react";
import { ICarModel } from "../../../reducers/car-type";

export default function useFilter(filterObj: any, inputArray: Array<ICarModel>) {
    const [filteredData, setFilteredData] = useState<Array<ICarModel> | []>(inputArray);

    useEffect(() => {
        const filterObjKeys = Object.keys(filterObj);
        if (filterObjKeys.length > 0) {
            let newCarModel = inputArray.filter((carModel: ICarModel) => {
                const matched = filterObjKeys.some((filterKey: string) => {
                    const value = filterObj[filterKey as keyof typeof filterObj];
                    const carModelValue  = carModel[filterKey as keyof typeof carModel];
                    if (typeof (value) === 'object' 
                    && (value.indexOf(carModelValue) >-1)
                    ) {
                        return true;
                    } else if (carModelValue === value){
                        return true;
                    }
                    return false;
                });
                // console.log(matched)
                // console.log(carModel);
                if (matched) {
                    return carModel;
                }

                return false;

            });

            // console.log("newCarModel",newCarModel);
            setFilteredData([...newCarModel]);
        }
    }, [filterObj])

    return { filteredData: filteredData };
}