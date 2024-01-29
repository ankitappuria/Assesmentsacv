
export interface ICarModel {
  model: string
  color: string
  yearManufacture: number;
  insuranceValid:string;
  kms:number;
  location:string;
  noOfOwners:number;
  transmission:string;
  externalfitment:string;
  photo:string;
}

type CarModelState = {
  carModels: ICarModel[]
}


const  CarModelAction:string = "ADD_ARTICLE";

export default CarModelState;

export { CarModelAction }