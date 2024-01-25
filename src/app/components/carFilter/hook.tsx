import { useEffect, useState } from "react";
import { ICarModel } from "../../../reducers/car-type";

export default function useFilter(filterObj: any, inputArray: ICarModel[]) {
    const [filteredData, setFilteredData] = useState<ICarModel[] | []>(inputArray);

    useEffect(() => {
        const filterObjKeys = Object.keys(filterObj);
        if (filterObjKeys.length > 0) {
            let newCarModel = inputArray.filter((carModel: ICarModel) => {
                const matched = filterObjKeys.some((filter: string) => {
                    if (carModel[filter as keyof typeof carModel] === filterObj[filter as keyof typeof filterObj]) {
                        return true;
                    }

                    return false;
                });
                if (matched) {
                    return carModel;
                }

                return false;

            });
            setFilteredData(newCarModel);
        }
    }, [filterObj])

    return filteredData;
}