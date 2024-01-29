import { useEffect, useState } from "react";
import { ICarModel } from "../../reducers/car-model-type";

/* 
    filters inputArray  using filterObj keys (or filter)
    @Params filterOBj  
    @Params inputArray 
    returns a filtered array 
 */

export default function useFilter(filterObj: any, inputArray: Array<ICarModel>) {
    const [filteredData, setFilteredData] = useState<Array<ICarModel> | []>(inputArray);
        
    useEffect(() => {
        const filterObjKeys = Object.keys(filterObj);
        if (filterObjKeys.length > 0) {
            let newCarModel = inputArray.filter((carModel: ICarModel) => {
                const matched = filterObjKeys.some((filterKey: string) => {
                    const value = filterObj[filterKey as keyof typeof filterObj];
                    const carModelValue = carModel[filterKey as keyof typeof carModel];
                    if (typeof (value) === 'object'
                        && (value.indexOf(carModelValue) > -1)
                    ) {
                        return true;
                    } else if (carModelValue === value) {
                        return true;
                    }
                    return false;
                });
                if (matched) {
                    return carModel;
                }

                return false;

            });

            setFilteredData([...newCarModel]);
        }
    }, [filterObj,inputArray])

    return { filteredData: filteredData };
}